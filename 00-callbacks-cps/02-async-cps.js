function addAsync(a, b, next) {
  setImmediate(() => next(a + b))
}

function doubleAsync(n, next) {
  setImmediate(() => next(n * 2))
}

function toStringAsync(n, next) {
  setImmediate(() => next(String(n)))
}

console.log("start")

addAsync(2, 3, (sum) => {
  doubleAsync(sum, (doubled) => {
    toStringAsync(doubled, (result) => {
      console.log("result:", result)
    })
  })
})

console.log("after-schedule")
