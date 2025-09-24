const { EventEmitter } = require('events')

class Counter extends EventEmitter {
  constructor() {
    super()
    this.value = 0
  }
  inc() {
    this.value++
    this.emit('change', this.value)
  }
}

const c = new Counter()
c.on('change', (v) => console.log('value:', v))

c.inc()
c.inc()
c.inc()

