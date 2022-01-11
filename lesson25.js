function sum(...items) {
  return items.length > 0
    ? items.reduce((a, b) => a + b)
    : 0
}

console.log(sum(2, 3))
console.log(sum(2, 3, 4, 5, 6, 7))
console.log(sum())
