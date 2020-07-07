// 块级作用域
function f(input) {
  let a = 100
  if (input) {
    let b = a + 1
    return b
  }

  // 找不到 b
  return b
}
f(true)

try {
  throw "Hi"
} catch (e) {
  console.log("catch")
}
console.log(e)

// 暂时性死区 TDZ
b++
let b = 1

// 不允许重复声明
let a = 1
let a = 2

function g(x) {
  let x = 10
}


for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100 * i)
}
