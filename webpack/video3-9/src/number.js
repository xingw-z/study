function number() {
    if (document.getElementById('number')) {
        document.body.removeChild(document.getElementById('number'));
    }
    var div = document.createElement('div');
    div.setAttribute('id', 'number')
    div.innerHTML = 2000;
    document.body.appendChild(div);
}

export default number;