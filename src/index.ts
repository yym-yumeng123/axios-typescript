import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/header'

const axios = (config: AxiosRequestConfig): void => {
  // 处理 config 配置
  processConfig(config)
  xhr(config)
}

const processConfig = (config: AxiosRequestConfig): void => {
  // 1. 处理 url
  config.url = transformURL(config)
  // 2. 处理 headers
  config.headers = transfromHeaders(config)
  // 3. 处理 data
  config.data = transfromRequestData(config)
}

/**
 * 对 config 的 url 处理
 * @param config
 */
const transformURL = (config: AxiosRequestConfig): string => {
  const { url, params } = config
  return buildURL(url, params)
}

/**
 *
 * @param config 请求data
 */
const transfromRequestData = (config: AxiosRequestConfig): any => {
  return transformRequest(config.data)
}

/**
 * 处理 heaers
 */
const transfromHeaders = (config: AxiosRequestConfig): any => {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
