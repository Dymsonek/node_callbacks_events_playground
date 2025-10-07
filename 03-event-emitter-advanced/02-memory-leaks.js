const { EventEmitter } = require('events')

console.log('memory leaks — start')

const bus = new EventEmitter()
bus.setMaxListeners(5)

for (let i = 1; i <= 7; i++) {
  bus.on('data', () => {})
}

console.log('listeners on data:', bus.listenerCount('data'))

bus.removeAllListeners('data')
console.log('after cleanup:', bus.listenerCount('data'))

console.log('memory leaks — end')
