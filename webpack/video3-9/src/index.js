// import './style.css';

// var btn = document.createElement('button');
// btn.innerHTML = '按下button'
// document.body.append(btn);

// btn.onclick = function() {
//     var div = document.createElement('div');
//     div.innerHTML = '认认真真生存';
//     document.body.append(div);
// }

import counter from './counter';
import number from './number';
counter();
number();

if (module.hot) {
    module.hot.accept('./number', () => {
        console.log('123')
        number();
    });
} 