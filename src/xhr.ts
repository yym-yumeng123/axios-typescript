import { AxiosRequestConfig } from './types'

const xhr = (config: AxiosRequestConfig): void => {
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()

  /**
   * @params { method, url, async }
   * async: true ==> 异步
   */
  request.open(method.toLocaleUpperCase(), url, true)

  request.send(data)
}

export default xhr
