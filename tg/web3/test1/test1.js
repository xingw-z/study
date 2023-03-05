var Web3 = require('web3');
var fs = require("fs");
const {parse, stringify, toJSON, fromJSON} = require('flatted');

var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

console.log(Web3.version);
// fs.writeFile('input.txt', stringify(web3),  function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("数据写入成功！");
//     console.log("--------我是分割线-------------")
//     console.log("读取写入的数据！");
//     fs.readFile('input.txt', function (err, data) {
//        if (err) {
//           return console.error(err);
//        }
//        console.log("异步读取文件数据: " + data.toString());
//     });
//  });