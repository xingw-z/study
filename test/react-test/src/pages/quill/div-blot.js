import Quill  from "quill";

const Block = Quill.import('blots/block');


class DivBlot extends Block {
// class DivBlot extends parchment.BlockBlot {
    static create(value) {
        const div = document.createElement('div');
        // div.innerText = value;
        div.setAttribute('class', this.className);
        console.log(value, 'value', div.innerText);
        return div;
    }
    static formats(domNode) {
        return {}
    }
    // format(name, value) {
    //     console.log(name, value, 'name, value');
    // }
    // optimize(context) {
    // }
    
}

DivBlot.blotName = 'div-blot';
DivBlot.tagName = 'DIV';
DivBlot.className = 'div-blot';

export default DivBlot;
