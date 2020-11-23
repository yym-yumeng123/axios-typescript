import { head } from 'shelljs'
import { isPlainObject } from './util'

// Content-Type  转换 content-type
const normalizeHeaderName = (headers: any, normalizedName: string): void => {
  if (!headers) return

  Object.keys(headers).forEach(name => {
    // content-type !== Content-Type
    if (
      name !== normalizedName &&
      name.toLocaleUpperCase() === normalizedName.toLocaleUpperCase()
    ) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

/**
 * @param {headers}
 * @param {data} 是否普通对象
 */
export const processHeaders = (headers: any, data: any): any => {
  // 把 小写转换为大写
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}
