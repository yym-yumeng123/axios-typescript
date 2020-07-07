// 不能重新赋值
const NUM = 10

const kitty = {
  name: 'kitty',
  nameLivesL: NUM
}

kitty = {

}

// 引用没变化
kitty.name = 'Jerry'
kitty.nameLivesL--


// 不变的都应该用 const