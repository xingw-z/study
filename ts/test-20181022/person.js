var Choose;
(function (Choose) {
    Choose[Choose["Wife"] = 1] = "Wife";
    Choose[Choose["Mother"] = 2] = "Mother";
})(Choose || (Choose = {})); // 选择
function question(choose) {
    console.log('救救救');
    console.log("\u9009\u62E9\uFF1A" + choose);
}
question(Choose.Mother);
console.log(typeof Choose);
