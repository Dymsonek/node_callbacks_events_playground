function doWorkUnpredictable(input, cb) {
  if (input % 2 === 1) {
    cb(input)
  } else {
    setImmediate(() => cb(input))
  }
}

console.log('ordering demo — start')

console.log('A1')
doWorkUnpredictable(1, () => {
  console.log('B1 (sync)')
})
console.log('C1')

console.log('A2')
doWorkUnpredictable(2, () => {
  console.log('B2 (async)')
})
console.log('C2')

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
