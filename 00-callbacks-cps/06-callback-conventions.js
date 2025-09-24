const defer = (fn) => (typeof queueMicrotask === 'function' ? queueMicrotask(fn) : typeof setImmediate === 'function' ? setImmediate(fn) : setTimeout(fn, 0))

const once = (fn) => {
  let called = false
  return (...args) => {
    if (called) return
    called = true
    fn(...args)
  }
}

function toUpper(str, cb) {
  defer(() => (typeof str === 'string' ? cb(null, str.toUpperCase()) : cb(new TypeError('toUpper: string required'))))
}

function divide(a, b, cb) {
  defer(() => (typeof a === 'number' && typeof b === 'number' ? (b === 0 ? cb(new RangeError('divide: by zero')) : cb(null, a / b)) : cb(new TypeError('divide: numbers required'))))
}

function safeJsonParse(text, cb) {
  defer(() => {
    try {
      cb(null, JSON.parse(text))
    } catch (e) {
      cb(e)
    }
  })
}

function unstableOperation(flag, cb) {
  const done = once(cb)
  defer(() => done(null, 'ok-1'))
  if (flag) defer(() => done(null, 'ok-2'))
}

function greet(name, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }
  const excited = options && options.excited
  defer(() => (typeof name === 'string' ? cb(null, `Hello, ${name}${excited ? '!' : ''}`) : cb(new TypeError('greet: string required'))))
}

toUpper('hello', (e, v) => (e ? console.error('error:', e.message) : console.log('upper:', v)))
toUpper(123, (e) => e && console.error('error:', e.message))

divide(6, 3, (e, v) => (e ? console.error('error:', e.message) : console.log('divide:', v)))
divide(1, 0, (e) => e && console.error('error:', e.message))

safeJsonParse('{"ok":true}', (e, v) => (e ? console.error('error:', e.message) : console.log('parsed.ok:', v.ok)))
safeJsonParse('{oops}', (e) => e && console.error('error:', e.message))

unstableOperation(true, (e, v) => (e ? console.error('error:', e.message) : console.log('once:', v)))

greet('Ada', (e, v) => (e ? console.error('error:', e.message) : console.log('greet:', v)))
greet('Ada', { excited: true }, (e, v) => (e ? console.error('error:', e.message) : console.log('greet:', v)))

defer(() => console.log('end'))
