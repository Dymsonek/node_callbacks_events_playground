function add(a, b, cb) {
  setImmediate(() => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return cb(new TypeError('add expects numbers'))
    }
    cb(null, a + b)
  })
}

function double(n, cb) {
  setImmediate(() => {
    if (typeof n !== 'number') return cb(new TypeError('double expects a number'))
    cb(null, n * 2)
  })
}

function toString(n, cb) {
  setImmediate(() => {
    cb(null, String(n))
  })
}

console.log('start')

add(2, 3, (err, sum) => {
  if (err) return console.error('add failed:', err.message)
  double(sum, (err, doubled) => {
    if (err) return console.error('double failed:', err.message)
    toString(doubled, (err, result) => {
      if (err) return console.error('toString failed:', err.message)
      console.log('result:', result)
    })
  })
})

add('x', 3, (err) => {
  if (err) console.error('expected error:', err.message)
})

console.log('after-schedule')
