import Quill  from "quill";

const Block = Quill.import('blots/block')

class DivBlot extends Block {
    // static create(value) {
    //     const div = document.createElement('div');
    //     div.innerText = value;
    //     div.setAttribute('class', 'div-blot');
    //     console.log(value)
    //     return div;
    // }
    // static value(domNode) {
    //     console.log(33)
    //     return domNode.innerText;
    // }
    static formats(node) {
        return node.innerText
    }
}

DivBlot.blotName = 'div-blot';
DivBlot.tagName = 'DIV';
DivBlot.className = 'div-blot';

export default DivBlot;
