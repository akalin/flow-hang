This repo is a minimal test case for a flow hang bug. To repro, do:

```
> yarn
yarn install v1.3.2
warning package.json: No license field
warning No license field
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.08s.

> node_modules/.bin/flow version
Flow, a static type checker for JavaScript, version 0.66.0

> node_modules/.bin/flow status
Launching Flow server for /Users/akalin/src/flow-hang-bug
Spawned flow server (pid=81350)
Logs will go to /private/tmp/flow/zSUserszSakalinzSsrczSflow-hang-bug.log
Monitor logs will go to /private/tmp/flow/zSUserszSakalinzSsrczSflow-hang-bug.monitor_log
Please wait. Server is initializing (merged files 3/4 (75.0%)): \

<hangs>
```

Things that cause flow to work again:

- Downgrading flow-bin to 0.65.0.
- Inlining the code in `matrix.js` into `row-reduce.js`.
- Removing an unused case from the `RowReduceState` type.
- Simplifying `rowReduceNextState`.
