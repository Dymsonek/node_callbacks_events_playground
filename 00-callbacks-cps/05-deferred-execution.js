// Guarantee asynchronicity (defer execution) to fix Zalgo
// Always schedule callbacks on the next turn of the event loop.

const defer = (fn) => {
  if (typeof queueMicrotask === 'function') return queueMicrotask(fn)
  if (typeof setImmediate === 'function') return setImmediate(fn)
  return setTimeout(fn, 0)
}

function ensureAsync(cb) {
  return (...args) => defer(() => cb(...args))
}

// A function that internally might complete "sync" or "async" depending
// on input, but we wrap its callback with ensureAsync so it's ALWAYS deferred.
function doWorkFixed(input, cb) {
  const done = ensureAsync(cb)

  if (typeof input !== 'number') {
    return done(new TypeError('input must be a number'))
  }

  // Simulate inconsistent behavior: odd -> would be sync, even -> async
  if (input % 2 === 1) {
    // would be sync, but ensureAsync defers it
    done(null, input)
  } else {
    // async path stays async
    setImmediate(() => done(null, input))
  }
}

console.log('ordering demo — start')

console.log('A1')
doWorkFixed(1, (err, value) => {
  if (err) return console.error('B1 error:', err.message)
  console.log('B1 (deferred):', value)
})
console.log('C1')

console.log('A2')
doWorkFixed(2, (err, value) => {
  if (err) return console.error('B2 error:', err.message)
  console.log('B2 (deferred):', value)
})
console.log('C2')

// Both cases now show A -> C -> B ordering because callbacks are deferred.

// Error handling demo: no try/catch around async, use error-first callback.
doWorkFixed('x', (err) => {
  if (err) console.error('expected error (deferred):', err.message)
})

defer(() => console.log('end'))
