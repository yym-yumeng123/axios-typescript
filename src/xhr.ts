import { AxiosResponse } from './types/index';
import { AxiosRequestConfig, AxiosPromise } from './types'

const xhr = (config: AxiosRequestConfig): AxiosPromise => {
  return new Promise(resolve => {
    const { data = null, url, method = 'get', headers, responseType } = config
    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }
    /**
     * @params { method, url, async }
     * async: true ==> 异步
     */
    request.open(method.toLocaleUpperCase(), url, true)

    request.onreadystatechange = function handleLoad () {
      if(request.readyState !== 4) {
        return
      }

      // 把好的结果 resolve(出去)
      const responseHeaders = request.getAllResponseHeaders()
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }

      resolve(response)
    }

    Object.keys(headers).forEach(name => {
      // data = null headers 无意义, 删除掉
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.send(data)
  })
}

export default xhr
