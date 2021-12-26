

try {
  interview((res) => {
    console.log(res, 'try');
  })
} catch (e) {
  console.log(e);
}
// 必须 把错误 传给 call back 才可以捕获到 不然那就是直接全局报错
function interview(callback) {
  setTimeout(() => {
    callback(new Error('ads'))
  }, 1000);
}