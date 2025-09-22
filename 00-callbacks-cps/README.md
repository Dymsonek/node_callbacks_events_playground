00 — Continuation-Passing Style (CPS)

Goals
- Understand CPS: passing the next step as a callback
- Contrast synchronous CPS vs asynchronous CPS
- Introduce Node-style callbacks (error-first, callback-last)

Exercises
1. 01-sync-cps.js: Write simple sync CPS utilities and chain them
2. 02-async-cps.js: Make CPS async with `setImmediate`/`setTimeout`
3. 03-error-first.js: Adopt Node-style error-first callbacks
4. 04-unpredictable-zalgo.js: Show how mixed sync/async breaks ordering and try/catch

Run
`node 00-callbacks-cps/01-sync-cps.js`
