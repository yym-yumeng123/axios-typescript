import axios from '../../src/index'

// http://localhost:8080/base/get?foo[]=bar&foo[]=yym
// foo[]: bar
// foo[]: yym
axios({
  method: 'get',
  url: '/base/get',
  // 参数是数组
  params: {
    foo: ['bar', 'yym']
  }
})

// http://localhost:8080/base/get?foo=%7B%22bar%22:%22yym%22%7D
// foo: {"bar":"yym"}
axios({
  method: 'get',
  url: '/base/get',
  // 参数是对象
  params: {
    foo: {
      bar: 'yym'
    }
  }
})

const date = new Date()

// http://localhost:8080/base/get?date=2020-11-07T06:30:38.757Z
// date: 2020-11-07T06:30:38.757Z
axios({
  method: 'get',
  url: '/base/get',
  // 参数是日期
  params: {
    date
  }
})

// http://localhost:8080/base/get?foo=@:$,+
// foo: @:$,
axios({
  method: 'get',
  url: '/base/get',
  // 参数是特殊字符
  params: {
    foo: '@:$, '
  }
})

// http://localhost:8080/base/get?foo=bar
// foo: bar
axios({
  method: 'get',
  url: '/base/get',
  // 参数是 null
  params: {
    foo: 'bar',
    baz: null
  }
})

// http://localhost:8080/base/get?foo=barHash
axios({
  method: 'get',
  // 带 hash
  url: '/base/get#hash',
  params: {
    foo: 'barHash'
  }
})

// http://localhost:8080/base/get?foo=bar&baz=bar%3F
// foo: bar
// baz: bar?
axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    baz: 'bar?'
  }
})

/**
 * 处理 data 后
 */
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

// const arr = new Int32Array([21, 31])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

// headers
axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  },
  data: {
    a: 1,
    b: 2
  }
})

// promise
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 11,
    b: 22
  }
}).then(res => {
  console.log(res, 'res...')
})

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 33,
    b: 44
  }
}).then(res => {
  console.log(res, 'res...responseType')
})
