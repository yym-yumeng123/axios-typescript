/**
 * 工具函数
 */

const toString = Object.prototype.toString

// 是否是日期
export const isDate = (val: any): val is Date => {
  return toString.call(val) === '[object Date]'
}

// 是否是对象
// export const isObject = (val: any): val is Object => {
//   return val !== null && typeof val === 'object'
// }

// 普通对象, 非 formData
export const isPlainObject = (val: any): val is Object => {
  return toString.call(val) === '[object, Object]'
}

