// let 和 const

{
  let a = 10;
  var b = 1;
}

console.log(a) // ReferenceError: a is not defined.
console.log(b) // 1


for (let i = 0; i < 10; i++) {
  // ...
}

console.log(i);
// ReferenceError: i is not defined


var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10


var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6


// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

/*--------暂时性死区-----------*/
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}

/*--------不允许重复声明-----------*/
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}

/*--------块级作用域-----------*/

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

// 任意嵌套
{{{{{let insane = 'Hello World'}}}}};

// 块级作用域写法
{
  let tmp = ...;
  ...
}


/*--------const基本用法-----------*/
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.


// 必须初始化
const foo;

// const的作用域与let命令相同
if (true) {
  const MAX = 5;
}

console.log(MAX) //报错