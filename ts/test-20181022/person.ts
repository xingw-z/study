enum Choose { Wife = 1, Mother = 2 } // 选择

function question(choose: Choose) : void{
    console.log('救救救');
    console.log(`选择：${ choose }`);
}

question(Choose.Mother);

console.log(typeof Choose);