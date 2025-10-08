const defer = (fn) => {
  if (typeof queueMicrotask === 'function') return queueMicrotask(fn)
  if (typeof setImmediate === 'function') return setImmediate(fn)
  return setTimeout(fn, 0)
}

function ensureAsync(cb) {
  return (...args) => defer(() => cb(...args))
}

function doWorkFixed(input, cb) {
  const done = ensureAsync(cb)

  if (typeof input !== 'number') {
    return done(new TypeError('input must be a number'))
  }

  if (input % 2 === 1) {
    done(null, input)
  } else {
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

doWorkFixed('x', (err) => {
  if (err) console.error('expected error (deferred):', err.message)
})

defer(() => console.log('end'))
