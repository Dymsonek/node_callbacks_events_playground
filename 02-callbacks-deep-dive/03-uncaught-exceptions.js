console.log('uncaught exceptions — start')

process.once('uncaughtException', (err) => {
  console.log('uncaughtException observed:', err.message)
})

function asyncWork(shouldFail, cb) {
  setImmediate(() => {
    if (shouldFail) {
      throw new Error('boom-async-throw')
    }
    cb(null, 'ok')
  })
}

function asyncWorkSafe(shouldFail, cb) {
  setImmediate(() => {
    if (shouldFail) return cb(new Error('boom-safe'))
    cb(null, 'ok')
  })
}

try {
  asyncWork(true, (err, v) => {
    if (err) console.log('unexpected err:', err)
    console.log('value:', v)
  })
} catch (e) {
  console.log('caught (should not happen):', e.message)
}

asyncWorkSafe(true, (err) => {
  if (err) console.log('handled via callback:', err.message)
})

setImmediate(() => console.log('uncaught exceptions — end'))
