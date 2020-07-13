// 数组解构
let input: [number, number] = [1, 2]

function f([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}

f(input)

let [three, ...rest] = [1, 2, 3, 4]
console.log(three)
console.log(rest)

// 对象解构
let obj = {
  a: "foo",
  b: 12,
  c: "bar",
}

let { a, ...passthrough } = obj
let total = passthrough.b + passthrough.c.length
console.log(total, "total")

let { a: newNameA, b: newNameB } = obj

// 有参数
function keepWholeObject(whole) {
  let { a, b = 1001 } = whole
}

// type
type C = { a: string; b?: number }
function fn({ a, b }: C): void {}
function fn1({ a = "", b = 0 } = { a: "" }): void {}
fn1({ a: "yes" })
