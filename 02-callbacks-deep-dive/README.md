02 — Callbacks Deep Dive

Goals
- Non-CPS callbacks (visitors, timers, multi-fire)
- Using synchronous APIs and blocking implications
- Uncaught exceptions in async code and safe patterns

Conventions
- No inline comments; behavior shown via output
- Single quotes and lowercase labels
- Prefer error-first callbacks over throwing across async boundaries
- Use queueMicrotask/setImmediate for explicit asynchronicity

Run
`node 02-callbacks-deep-dive/01-non-cps.js`
`node 02-callbacks-deep-dive/02-using-sync-apis.js`
`node 02-callbacks-deep-dive/03-uncaught-exceptions.js`
