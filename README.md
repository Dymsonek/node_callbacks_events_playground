Node.js Callbacks & Events — Portfolio

Compact examples showcasing callback patterns and the EventEmitter in Node.js. Each topic is a numbered directory with runnable, minimal code samples.

Topics
- 00-callbacks-cps: CPS basics, sync vs async, error-first callbacks, Zalgo, conventions.
- 01-event-emitter: Emit/on/once, error handling, observable objects, sync vs async handlers.
- 02-callbacks-deep-dive: Non-CPS patterns, sync APIs, uncaught exceptions and safe handling.
- 03-event-emitter-advanced: Error propagation, MaxListeners, API design, combining callbacks + events.

Run Examples
Use Node.js to run any file directly:

`node 00-callbacks-cps/01-sync-cps.js`
`node 01-event-emitter/01-basic.js`
`node 02-callbacks-deep-dive/01-non-cps.js`
`node 03-event-emitter-advanced/01-error-propagation.js`

Structure
- Each directory contains short, focused scripts.
- No inline comments; behavior is demonstrated via output.
