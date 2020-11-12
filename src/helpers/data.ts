import { isPlainObject } from "./util";

/**
 * 转换 data
 */
export const transformRequest = (data: any): any => {
  // 如果是普通对象
  if(isPlainObject(data)) {
    return JSON.stringify(data)
  }

  return data
}
