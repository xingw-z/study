// import _ from 'lodash';
// console.log(_.join(['a', 'b', 'c'], '**'));

function getComponent () {
    return import('lodash').then(_ => {
        var ele = document.createElement('div');

        ele.innerHTML = _.join(['a', 'b', 'c'], '-');
        return ele
    })
}

getComponent().then(ele => {
	document.body.appendChild(ele);
})

// function getComponent() {
// 	return import('lodash').then(({ default: _ }) => {
// 		var element = document.createElement('div');
// 		element.innerHTML = _.join(['Dell', 'Lee'], '-');
// 		return element;
// 	})
// }


// getComponent().then(element => {
// 	document.body.appendChild(element);
// });

