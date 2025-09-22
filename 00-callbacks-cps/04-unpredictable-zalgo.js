// Unpredictable (Zalgo) behavior: sometimes sync, sometimes async
// This demonstrates surprising ordering and broken try/catch when callbacks
// may fire synchronously or asynchronously depending on conditions.

function doWorkUnpredictable(input, cb) {
  // Odd -> sync, Even -> async (simulates inconsistent implementation)
  if (input % 2 === 1) {
    cb(input)
  } else {
    setImmediate(() => cb(input))
  }
}

console.log('ordering demo — start')

// Case 1: sync callback
console.log('A1')
doWorkUnpredictable(1, () => {
  console.log('B1 (sync)')
})
console.log('C1')

// Case 2: async callback
console.log('A2')
doWorkUnpredictable(2, () => {
  console.log('B2 (async)')
})
console.log('C2')

// Expected output shows different ordering:
// A1 -> B1 -> C1 (sync)
// A2 -> C2 -> B2 (async)

// try/catch demo — errors behave differently
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

console.log('try/catch demo — sync throw:')
try {
  callAndThrowUnpredictable(true, () => {
    throw new Error('boom-sync')
  })
} catch (err) {
  console.log('caught via try/catch:', err.message)
}

console.log('try/catch demo — async throw:')
try {
  callAndThrowUnpredictable(false, () => {
    throw new Error('boom-async')
  })
} catch (err) {
  console.log('caught via try/catch (should not happen):', err.message)
}

setImmediate(() => console.log('end'))
