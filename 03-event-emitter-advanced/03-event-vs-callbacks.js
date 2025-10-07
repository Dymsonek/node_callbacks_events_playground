const { EventEmitter } = require('events')

function doTaskCallback(steps, cb) {
  let n = 0
  function step() {
    n++
    if (n < steps) return setImmediate(step)
    cb(null, { done: true, steps })
  }
  setImmediate(step)
}

function createTaskEmitter(steps) {
  const bus = new EventEmitter()
  let n = 0
  function step() {
    n++
    bus.emit('progress', { step: n, total: steps })
    if (n < steps) return setImmediate(step)
    bus.emit('done', { done: true, steps })
  }
  setImmediate(step)
  return bus
}

console.log('callbacks:')
doTaskCallback(3, (err, res) => {
  if (err) return console.error('error:', err.message)
  console.log('completed via callback:', res)
})

console.log('events:')
const t = createTaskEmitter(3)
t.on('progress', (p) => console.log('progress:', p))
t.on('done', (res) => console.log('completed via event:', res))
