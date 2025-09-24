Node.js Callbacks & Events Playground

A step-by-step playground to learn callback patterns and the EventEmitter in Node.js. Each topic lives in a numbered directory (00, 01, …) and evolves with small commits.

Status
- Implemented in 00: sync CPS, async CPS, error-first callbacks, unpredictable/Zalgo, callback conventions.

Index
- 00-callbacks-cps: Continuation-Passing Style basics, sync vs async, Node-style callbacks, Zalgo pitfalls.
- 01-event-emitter (planned): Creating/using EventEmitter, error propagation, making objects observable, memory leaks, sync vs async events, EventEmitter vs callbacks, combining both.

How to run
Use Node.js to run any example file directly, for example:

`node 00-callbacks-cps/01-sync-cps.js`

Next steps
- 00-callbacks-cps/05-deferred-execution.js: Guarantee asynchronicity to fix Zalgo (setImmediate/setTimeout(0)).
- 01-event-emitter/: EventEmitter basics and patterns (new directory).

Commit style
- Small, focused commits after each exercise or doc update.
