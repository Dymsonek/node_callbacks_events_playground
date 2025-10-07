console.log('non-CPS examples — start')

const items = [1, 2, 3]
items.forEach((n, i) => {
  console.log('forEach visitor', { index: i, value: n })
})

let ticks = 0
const id = setInterval(() => {
  ticks++
  console.log('interval tick', ticks)
  if (ticks === 3) clearInterval(id)
}, 0)

console.log('non-CPS examples — scheduled')
