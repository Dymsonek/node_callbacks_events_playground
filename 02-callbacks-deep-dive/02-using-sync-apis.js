const fs = require('fs')

console.log('start')

try {
  const text = fs.readFileSync(__filename, 'utf8')
  console.log('sync length:', text.length)
} catch (e) {
  console.error('sync error:', e.message)
}
console.log('after sync call')

process.once('uncaughtException', (e) => {
  console.log('uncaughtException observed:', e.message)
})

try {
  fs.readFile(__filename + '.missing', 'utf8', (err, data) => {
    if (err) throw err
    console.log('async length:', data.length)
  })
} catch (e) {
  console.log('caught in try/catch (should not):', e.message)
}

setImmediate(() => console.log('end'))
