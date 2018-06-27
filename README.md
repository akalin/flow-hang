This repo is a minimal test case for a flow slowness bug. To repro, do:

```
> yarn
yarn install v1.7.0
warning package.json: No license field
warning No license field
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.10s.

> node_modules/.bin/flow version
Flow, a static type checker for JavaScript, version 0.75.0

> time node_modules/.bin/flow status
Launching Flow server for /home/akalin/src/flow-hang
Spawned flow server (pid=28897)
Logs will go to /tmp/flow/zShomezSakalinzSsrczSflow-hang.log
Monitor logs will go to /tmp/flow/zShomezSakalinzSsrczSflow-hang.monitor_log
No errors!
0.39user 0.03system 0:28.83elapsed 1%CPU (0avgtext+0avgdata 29676maxresident)k
0inputs+712outputs (0major+10654minor)pagefaults 0swaps
```

Things that cause flow to be quick again (from ~30s to <1s):

- Downgrading flow-bin to 0.65.0. (0.66.0 - 0.71.0 runs into the hang from https://github.com/facebook/flow/issues/5870 )
- Inlining the code in `matrix.js` into `row-reduce.js`.
- Removing a case from the `RowReduceState` type.
- Simplifying `rowReduceNextState`.
