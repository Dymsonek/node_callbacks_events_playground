Node.js Callbacks & Events Playground

A step-by-step playground to learn callback patterns and the EventEmitter in Node.js. Each topic lives in a numbered directory (00, 01, …) and evolves with small commits.

Status
- Implemented in 00: sync CPS, async CPS, error-first callbacks, unpredictable/Zalgo, callback conventions.
 - Implemented in 01: EventEmitter basics, error handling, observable objects, sync vs async events.
 - Implemented in 02: Non-CPS callbacks, using sync APIs, uncaught exceptions.
 - Implemented in 03: EventEmitter advanced (error propagation, memory leaks, events vs callbacks, combining patterns).

Index
- 00-callbacks-cps: Continuation-Passing Style basics, sync vs async, Node-style callbacks, Zalgo pitfalls.
- 01-event-emitter: Creating/using EventEmitter, error propagation, making objects observable, sync vs async events.
 - 02-callbacks-deep-dive: Non-CPS callbacks, sync APIs, uncaught exceptions and safe patterns.
 - 03-event-emitter-advanced: Error propagation semantics, memory leaks, API design, combining callbacks and events.

How to run
Use Node.js to run any example file directly, for example:

`node 00-callbacks-cps/01-sync-cps.js`
`node 01-event-emitter/01-basic.js`
`node 02-callbacks-deep-dive/01-non-cps.js`
`node 03-event-emitter-advanced/01-error-propagation.js`

Next steps
- 00-callbacks-cps/05-deferred-execution.js: Guarantee asynchronicity to fix Zalgo (setImmediate/setTimeout(0)).
- 01-event-emitter/: EventEmitter basics and patterns (new directory).
 - 02-callbacks-deep-dive/: Fill in additional examples if needed.
 - 03-event-emitter-advanced/: Explore memory leaks and API design tradeoffs.

Commit style
- Small, focused commits after each exercise or doc update.
