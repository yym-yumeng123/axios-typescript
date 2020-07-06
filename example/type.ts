// boolean
const isDone: boolean = false

// number
const decLiteral: number = 20
const hexLiteral: number = 0x14
const bingryLiteral: number = 0b1010
const octalLiteral: number = 0o24

// string
const str: string = 'bob' 

// 数组
const list: number[] = [1,2,3]
const list1: Array<number> = [1, 3, 5]

// 元组
const x: [string, number] = ['yym', 12]

// 枚举
enum Color {
  Red,
  Green,
  Blue,
}

const c: Color = Color.Green
const colorName: string = Color[2]
console.log(colorName);


// any
let notSure: any = 4
notSure = 'maybe a string'

// void  没有任何类型
function warnUser(): void {
  console.log('wran message');
}

// null undefined
// null undefined 是任何类型的子类型
let u: undefined = undefined
let n: null = undefined

let num1: number = 3
num1 = null

// never 不存在的类型
function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error('something failed')
}

function initialLoop(): never {
  while(true) {}
}

// Object
declare function create(o: object | null): void

create({prop: 0})
create(null)

// 类型断言
let somevalue: any = 'this is a string'
let strLength: number = (somevalue as string).length
let strLength1: number = (<string>somevalue).length
