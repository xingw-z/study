enum Choose {
    Wife = 1,
    Mother = 2,
}

function question(choose: Choose) {
    console.log('你老婆和你妈妈同时掉进水里你先救哪个?');
    console.log('你的选择是： ' + choose);
}

question(Choose.Mother);