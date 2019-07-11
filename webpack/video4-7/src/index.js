
async function getComponent () {

    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    var ele = document.createElement('div');
    ele.innerHTML = _.join(['a', 'b', 'c'], '-');
    return ele

}

document.addEventListener('click', () => {
    getComponent().then(ele => {
        document.body.appendChild(ele);
    })
    
})



