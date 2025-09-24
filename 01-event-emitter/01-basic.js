const { EventEmitter } = require('events')

const bus = new EventEmitter()

bus.on('tick', (n) => console.log('tick', n))
bus.once('ready', () => console.log('ready'))

console.log('emit:ready')
bus.emit('ready')
console.log('emit:ready-again')
bus.emit('ready')

console.log('emit:tick 1..3')
for (let i = 1; i <= 3; i++) bus.emit('tick', i)

