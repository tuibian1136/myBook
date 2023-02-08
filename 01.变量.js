var a = 1
var b = 2
var c = '2'
var d = 's'
e = 1
console.log('a:', a, 'b:', b)
console.log(e)
let f = 33
console.log(f)
let $1Π何峰 = 'hf'
console.log($1Π何峰)
var m = 2
var n = 2

switch (m) {
  case 2:
    console.log('2', 'haha')
    break // 防止case穿透
  case 1:
    console.log('1', '呜呜')
    break
}
var h
var k = null
var funt = function(){}
console.log(typeof 'a')
console.log(typeof 1)
console.log(typeof true)
console.log(typeof undefined) // undefined
console.log(typeof h) // undefined   声明未赋值
console.log(typeof null) // object   注意：null的类型是object
console.log(typeof k) // object   注意：null的类型是object
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof NaN); // number
console.log(typeof funt); //function







// 先执行typeof，再执行===判断
if (typeof h === 'undefined') {
  console.log('h为undefined')
}

if (typeof m === 'number') {
  console.log('m为number')
}
console.log(typeof typeof h) // typeof的返回值类型都是string
console.log(typeof typeof 'h') //typeof的返回值类型都是string
console.log(typeof typeof 1) //typeof的返回值类型都是string
console.log(typeof typeof true) //typeof的返回值类型都是string

function fn1() {}
console.log(typeof fn1) //function   不把声明的函数赋给变量，则变量名的类型就是function

var aaa = function fn2() {}
console.log(typeof fn2) //undefined   若函数赋值给了变量，则函数名称的类型为undefined
console.log(typeof aaa) //function

var value = null
var value2 = undefined
console.log(value == value2) //true
console.log(value === value2) //false
console.log(Number(null)) // 0
console.log(5 + null) // 5
console.log(Number(undefined)) // NaN
console.log(5 + undefined) // NaN
