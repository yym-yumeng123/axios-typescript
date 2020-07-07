// 闭包场景
function f() {
  var a = 10
  return function g() {
    var b = a + 1
    return b
  }
}
var g = f()
g()

function f1(shouldInit) {
  if (shouldInit) {
    // 变量提升
    var x = 10
  }

  return x
}
f1(true)
f1(false)

// JS 是单线程的
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)
  }, 100 * i)
}

for (var i = 0; i < 10; i++) {
  (function(i){
    setTimeout(function () {
      console.log(i)
    }, 100 * i)
  })(i)

}