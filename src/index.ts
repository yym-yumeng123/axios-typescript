import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from './helpers/url'

const axios = (config: AxiosRequestConfig): void => {
  // 处理 config 配置
  processConfig(config)
  xhr(config)
}

const processConfig = (config: AxiosRequestConfig): void => {
  // 处理 url
  config.url = transformURL(config)
}

/**
 * 对 config 的 url 处理
 * @param config
 */
const transformURL = (config: AxiosRequestConfig): string => {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
