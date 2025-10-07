const { EventEmitter } = require('events')

function startTask(steps, cb) {
  const bus = new EventEmitter()
  let n = 0

  const done = (err, res) => {
    if (err) bus.emit('error', err)
    else bus.emit('done', res)
    if (typeof cb === 'function') cb(err, res)
  }

  function step() {
    n++
    bus.emit('progress', { step: n, total: steps })
    if (n < steps) return setImmediate(step)
    done(null, { ok: true, steps })
  }

  setImmediate(step)
  return bus
}

console.log('combining callbacks and events')
const task = startTask(3, (err, res) => {
  if (err) return console.error('callback error:', err.message)
  console.log('callback done:', res)
})

task.on('progress', (p) => console.log('progress:', p))
task.on('done', (res) => console.log('event done:', res))
task.on('error', (e) => console.log('event error:', e.message))
