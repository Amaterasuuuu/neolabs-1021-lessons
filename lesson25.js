function sum(...items) { // 2.0.1  
  return items.length > 0
    ? items.reduce((a, b) => a + b)
    : 0
}
// я поменял работу 
console.log(sum(2, 3))
console.log(sum(2, 3, 4, 5, 6, 7))
console.log(sum())


// git remote add origin git@github.com:neolabsjs/js-course-1021.git
// git remote set-url origin https://github.com/neolabsjs/js-course-1021.git

