const { EventEmitter } = require('events')

const bus = new EventEmitter()

bus.on('step', (n) => console.log('handler', n))

console.log('before')
bus.emit('step', 1)
console.log('between')
queueMicrotask(() => bus.emit('step', 2))
setImmediate(() => bus.emit('step', 3))
setTimeout(() => bus.emit('step', 4), 0)
console.log('after')

