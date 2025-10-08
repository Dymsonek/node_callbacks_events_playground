03 — EventEmitter Advanced

Goals
- Error propagation semantics of 'error'
- Memory leaks and MaxListenersExceededWarning
- EventEmitter vs callbacks: choosing interfaces
- Combining callbacks with events (progress + completion)

Conventions
- No inline comments; output demonstrates behavior
- Single quotes and lowercase labels
- Always consider 'error' listeners for safe propagation
- Use events for progress and callbacks for completion when combining

Run
`node 03-event-emitter-advanced/01-error-propagation.js`
`node 03-event-emitter-advanced/02-memory-leaks.js`
`node 03-event-emitter-advanced/03-event-vs-callbacks.js`
`node 03-event-emitter-advanced/04-combining-callbacks-events.js`
