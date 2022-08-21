
// var render = function (str, data) {
  
//   var tpl = str.replace(/<%=([\s\S]+?)%>/g, function(match, code) {
//     return "' + obj." + code + "+ '"; 
//   });
//   tpl = "var tpl = '" + tpl + "'\nreturn tpl;"; 
//   var complied = new Function('obj', tpl); 
//   console.log(tpl, '>>>');
//   return complied(data);
// };

// var tpl = 'Hello <%=username%>.'; console.log(render(tpl, {username: 'Jackson Tian'})); // => Hello Jackson Tian.


const f = new Function('abc, ccc, escape', `return escape(abc.aaa + ccc.ddd + 'd')`)
console.log(f({abc: '<<<>>>', aaa: '<<<>>>'}, {ddd: 222}, escape));