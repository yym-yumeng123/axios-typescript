// 数组扩展运算符
let first = [1, 2]
let second = [3, 4]
let bothPlus = [0, ...first, ...second]

// 对象扩展运算符
let defaults = {
  food: "spicy",
  pricy: 10,
  ambiance: "noise",
}

let search = { ...defaults, food: "rich" }
