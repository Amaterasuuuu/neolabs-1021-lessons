const test8 = typeof NaN + null + ''
// console.log(typeof test8) // 'numbernull'

// console.log(NaN + null + '')



// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// let i = 1
// while (i <= 10) {
//   console.log(i)
//   i++
// }

// i = 0
// while (i <= 10) {
//   console.log(i)
//   i++
// }



// const teachers = [
//   { name: "Adilet", age: 20 }, { name: "Arslan", age: 26 },
//   { name: "Aktan", age: 21 }, { name: "Dean", age: 25 }
// ]

// const totalAge = teachers.reduce((a, b) => {
//   console.log('a: ', a, 'b: ', b)
//   return a + b.age
// }, 0)
// console.log(totalAge)




// const input = 'hello123world92' // 17

// const findNumbers = str => str
//   .split('')
//   .filter(el => +el)
//   .reduce((a, b) => +a + +b)

// // function findNumbers(str) {
// //   str = str.split('')
// //   return str
// //     .filter(el => +el)
// //     .reduce((a, b) => +a + +b)
// // }

// console.log(findNumbers(input))



// const arr = [1, 2, 3, 4, 5]
// arr[6] = 6
// delete arr[2]
// console.log(arr)



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.length = 1000
arr.fill(100)
console.log(arr)
console.time('test push')
arr.pop()
console.timeEnd('test push')
