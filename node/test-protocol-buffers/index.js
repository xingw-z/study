var protobuf = require('protocol-buffers')
var fs = require('fs')
// pass a proto file as a buffer/string or pass a parsed protobuf-schema object
var messages = protobuf(fs.readFileSync('test.proto', 'utf-8'))
 
// var buf = messages.Test.encode({
//   num: 42,
//   payload: 'hello world',
// })
 
// console.log(buf) // shou

// var obj = messages.Test.decode(buf)
// console.log(obj) // should print an object s

var buf2 = messages.AnotherOne.encode({
    list: [1, 2]
})
var obj2 = messages.AnotherOne.decode(buf2)
console.log(buf2, obj2)