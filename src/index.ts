import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'

const axios = (config: AxiosRequestConfig): void => {
  // TODO
  xhr(config)
}

export default axios
