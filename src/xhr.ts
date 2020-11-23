import { AxiosRequestConfig, AxiosPromise } from './types'

const xhr = (config: AxiosRequestConfig): void => {
  const { data = null, url, method = 'get', headers } = config
  const request = new XMLHttpRequest()

  /**
   * @params { method, url, async }
   * async: true ==> 异步
   */
  request.open(method.toLocaleUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    // data = null headers 无意义, 删除掉
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.send(data)
}

export default xhr
