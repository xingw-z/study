var Choose;
(function (Choose) {
    Choose[Choose["Wife"] = 1] = "Wife";
    Choose[Choose["Mother"] = 2] = "Mother";
})(Choose || (Choose = {}));
function question(choose) {
    console.log('你老婆和你妈妈同时掉进水里你先救哪个?');
    console.log('你的选择是： ' + choose);
}
question(Choose.Mother);
