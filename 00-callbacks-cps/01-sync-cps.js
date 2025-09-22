function add(a, b, next) {
  next(a + b)
}

function double(n, next) {
  next(n * 2)
}

function toString(n, next) {
  next(String(n))
}

add(2, 3, (sum) => {
  double(sum, (doubled) => {
    toString(doubled, (result) => {
      console.log("Result:", result)
    })
  })
})
