// spread, rest

const numbers = [1, 2, 3, 4, 5]
const letters = ['a', 'b', 'c', 'd', 'e']
const symbols = ['/', '%', '+', '-', '*']

// const arr1 = [numbers, letters, symbols]
// console.log(arr1)



// const arr2 = []
// function pushItems(arr = [], items = []) {
//   for (let item of items) {
//     arr.push(item)
//   }
// }
// pushItems(arr2, numbers)
// pushItems(arr2, letters)
// pushItems(arr2, symbols)

// console.log(arr2)



// const arr3 = [...numbers]
// arr3.push(...letters)
// arr3.push(...symbols)
// console.log(arr3)



// let arr4 = numbers.concat(letters)
// console.log(arr4)
// arr4 = arr4.concat(symbols)
// console.log(arr4)



// let a = 10
// let b = 20
// let c = a
// a = b
// b = c
// console.log('a:', a, 'b:', b)
// c += 10
// console.log('a:', a, 'b:', b)


// const numbers1 = [1, 2, 3, 4, 5]
// const numbers2 = numbers1
// console.log(numbers1, numbers2, numbers1 == numbers2)
// numbers1.push(6, 7, 8)
// numbers2.push(9, 10)
// console.log(numbers1, numbers2, numbers1 == numbers2)


// const person1 = {
//   name: 'Adilet',
//   age: 20,
//   job: 'JS instructor'
// }

// const person2 = person1
// person2.name = 'Andrey'
// person1.name = 'Adilet'

// console.log(person1)
// console.log(person2)



// const person1 = {
//   name: 'Adilet',
//   age: 20,
//   job: 'JS instructor',
//   test: { a: 10, b: { c: 30 } }
// }

// // JavaScript Object Notation
// const person2 = JSON.parse(JSON.stringify(person1))
// person2.name = 'Andrey'
// person2.test.b.c = 50

// console.log(person1, typeof person1)
// console.log(person2, typeof person2)



// const person1 = {
  // name: 'Adilet',
  // age: 20,
  // job: 'JS instructor',
  // test: { a: 10, b: 20 }
// }

// const person2 = { ...person1 }
// person2.name = 'Andrey'
// person2.test.b = 50

// console.log(person1)
// console.log(person2)



// const person1 = {
//   name: 'Adilet',
//   age: 20,
//   job: 'JS instructor',
// }
// const person2 = {
//   hobby: 'Volleyball',
//   birthday: '19-05',
//   age: 21,
// }

// const person3 = { ...person1, ...person2 }
// console.log(person3)

// Object.assign(person1, person2)
// console.log(person1)


// function sum() {
//   return Object.values(arguments)
//     .filter(item => item == +item)
//     .reduce((a, b) => +a + +b)
// }

// console.log(sum(2, 3, 4, 5, 6, 'a', '20'))




// function sum(...items) {
//   if (items.length < 1) {
//     return 0
//   }
//   return items
//     .filter(item => item == +item)
//     .reduce((a, b) => +a + +b)
// }

// console.log(sum())
// console.log(sum(2, 3, 4, 5, 6, 'a', '20'))
