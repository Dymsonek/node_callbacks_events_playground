console.log('start')

const items = [1, 2, 3]
items.forEach((n, i) => {
  console.log('foreach visitor', { index: i, value: n })
})

let ticks = 0
const id = setInterval(() => {
  ticks++
  console.log('interval tick', ticks)
  if (ticks === 3) clearInterval(id)
}, 0)

console.log('scheduled')
