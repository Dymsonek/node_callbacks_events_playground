const { EventEmitter } = require('events')

const bus = new EventEmitter()

bus.on('error', (err) => console.log('error:', err.message))

console.log('emit:ok')
bus.emit('ok')

console.log('emit:error')
bus.emit('error', new Error('boom'))

