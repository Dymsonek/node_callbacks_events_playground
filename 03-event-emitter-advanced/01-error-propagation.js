const { EventEmitter } = require('events')

console.log('error propagation — start')

const bus1 = new EventEmitter()
try {
  bus1.emit('error', new Error('no-listener'))
} catch (e) {
  console.log('thrown due to no error listener:', e.message)
}

const bus2 = new EventEmitter()
bus2.on('error', (err) => console.log('handled error:', err.message))
bus2.emit('error', new Error('handled'))

console.log('error propagation — end')
