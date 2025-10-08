function doWorkUnpredictable(input, cb) {
  if (input % 2 === 1) {
    cb(input)
  } else {
    setImmediate(() => cb(input))
  }
}

console.log('start')

console.log('a1')
doWorkUnpredictable(1, () => {
  console.log('b1 (sync)')
})
console.log('c1')

console.log('a2')
doWorkUnpredictable(2, () => {
  console.log('b2 (async)')
})
console.log('c2')

process.once('uncaughtException', (err) => {
  console.log('uncaughtException observed:', err.message)
})

function callAndThrowUnpredictable(sync, cb) {
  if (sync) {
    cb()
  } else {
    setImmediate(cb)
  }
}

console.log('sync throw:')
try {
  callAndThrowUnpredictable(true, () => {
    throw new Error('boom-sync')
  })
} catch (err) {
  console.log('caught via try/catch:', err.message)
}

console.log('async throw:')
try {
  callAndThrowUnpredictable(false, () => {
    throw new Error('boom-async')
  })
} catch (err) {
  console.log('caught via try/catch (should not happen):', err.message)
}

setImmediate(() => console.log('end'))
