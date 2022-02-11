import Quill from "quill"
const Container = Quill.import("blots/container")
const Block = Quill.import("blots/block")
import { CELL_ATTRIBUTES, CELL_IDENTITY_KEYS, rowId, cellId, CELL_DEFAULT } from './table';

class TableCellUl extends Container {
  // checkMerge() {
  //   return false
  // }

  static create(value) {
    const node = super.create(value)
    // console.log(value, 'value');
    // CELL_IDENTITY_KEYS.forEach(key => {
    //   let identityMaker = key === 'row'
    //     ? rowId : cellId
    //   node.setAttribute(`data-${key}`, value[key] || identityMaker())
    // })

    // CELL_ATTRIBUTES.forEach(attrName => {
    //   node.setAttribute(`data-${attrName}`, value[attrName] || CELL_DEFAULT[attrName])
    // })

    // if (value['cell-bg']) {
    //   node.setAttribute('data-cell-bg', value['cell-bg'])
    // }
    // console.log(node, 'TableCellUl static create');

    return node
  }

  // static formats(domNode) {
  //   const formats = {}
  //   console.log(CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).concat(['cell-bg']).reduce((formats, attribute) => {
  //     if (domNode.hasAttribute(`data-${attribute}`)) {
  //       formats[attribute] = domNode.getAttribute(`data-${attribute}`) || undefined
  //     }
  //     return formats
  //   }, formats), 'domNode');
  //   return CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).concat(['cell-bg']).reduce((formats, attribute) => {
  //     if (domNode.hasAttribute(`data-${attribute}`)) {
  //       formats[attribute] = domNode.getAttribute(`data-${attribute}`) || undefined
  //     }
  //     return formats
  //   }, formats)
  // }

  // formats() {
  //   const formats = {}
    
  //   if (this.domNode.hasAttribute("data-row")) {
  //     formats["row"] = this.domNode.getAttribute("data-row")
  //   }

  //   if (this.domNode.hasAttribute("data-cell-bg")) {
  //     formats["cell-bg"] = this.domNode.getAttribute("data-cell-bg")
  //   }
  //   return CELL_ATTRIBUTES.reduce((formats, attribute) => {
  //     if (this.domNode.hasAttribute(attribute)) {
  //       formats[attribute] = this.domNode.getAttribute(attribute)
  //     }

  //     return formats
  //   }, formats)
  // }

  // format(name, value) {  
  //   if (CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).indexOf(name) > -1) {
  //     if (value) {
  //       this.domNode.setAttribute(`data-${name}`, value)
  //     } else {
  //       this.domNode.removeAttribute(`data-${name}`)
  //     }
  //   } else if (name === 'cell-bg') {
  //     if (value) {
  //       this.domNode.setAttribute('data-cell-bg', value)
  //     } else {
  //       this.domNode.removeAttribute('data-cell-bg')
  //     }
  //   } else if (name === 'header') {
  //     if (!value) return;
  //     const { row, cell, rowspan, colspan } = TableCellUl.formats(this.domNode)
  //     super.format(name, {
  //       value,
  //       row,
  //       cell,
  //       rowspan,
  //       colspan
  //     })
  //   } else {
  //     super.format(name, value)
  //   }
  // }

  optimize(context) {
    const rowId = this.domNode.getAttribute('data-row')
    const rowspan = this.domNode.getAttribute('data-rowspan')
    const colspan = this.domNode.getAttribute('data-colspan')
    const cellBg = this.domNode.getAttribute('data-cell-bg')
    if (this.statics.requiredContainer &&
      !(this.parent instanceof this.statics.requiredContainer)) {
      this.wrap(this.statics.requiredContainer.blotName, {
        row: rowId,
        colspan,
        rowspan,
        'cell-bg': cellBg
      })
    }
    super.optimize(context)
  }

  // tableCell() {
  //   return this.parent
  // }
  
}

TableCellUl.blotName = 'table-ul';
// TableCellUl.className = 'table-ul-class';
TableCellUl.tagName = 'UL';


class TableCellUlLi extends Block {
  static create(value) {
    const node = super.create(value)

    // CELL_IDENTITY_KEYS.forEach(key => {
    //   let identityMaker = key === 'row'
    //     ? rowId : cellId
    //   node.setAttribute(`data-${key}`, value[key] || identityMaker())
    // })

    // CELL_ATTRIBUTES.forEach(attrName => {
    //   node.setAttribute(`data-${attrName}`, value[attrName] || CELL_DEFAULT[attrName])
    // })

    // if (value['cell-bg']) {
    //   node.setAttribute('data-cell-bg', value['cell-bg'])
    // }
    // console.log(node, 'TableCellUlLi static create');

    return node
  }

  // static formats(domNode) {
  //   const formats = {}
  //   return CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).concat(['cell-bg']).reduce((formats, attribute) => {
  //     if (domNode.hasAttribute(`data-${attribute}`)) {
  //       formats[attribute] = domNode.getAttribute(`data-${attribute}`) || undefined
  //     }
  //     return formats
  //   }, formats)
  // }

  // format(name, value) {  
  //   if (CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).indexOf(name) > -1) {
  //     if (value) {
  //       this.domNode.setAttribute(`data-${name}`, value)
  //     } else {
  //       this.domNode.removeAttribute(`data-${name}`)
  //     }
  //   } else if (name === 'cell-bg') {
  //     if (value) {
  //       this.domNode.setAttribute('data-cell-bg', value)
  //     } else {
  //       this.domNode.removeAttribute('data-cell-bg')
  //     }
  //   } else if (name === 'header') {
  //     if (!value) return;
  //     const { row, cell, rowspan, colspan } = TableCellUlLi.formats(this.domNode)
  //     super.format(name, {
  //       value,
  //       row,
  //       cell,
  //       rowspan,
  //       colspan
  //     })
  //   } else {
  //     super.format(name, value)
  //   }
  // }

  optimize(context) {
    // cover shadowBlot's wrap call, pass params parentBlot initialize
    // needed
    const rowId = this.domNode.getAttribute('data-row')
    const rowspan = this.domNode.getAttribute('data-rowspan')
    const colspan = this.domNode.getAttribute('data-colspan')
    const cellBg = this.domNode.getAttribute('data-cell-bg')
    if (this.statics.requiredContainer &&
      !(this.parent instanceof this.statics.requiredContainer)) {
      this.wrap(this.statics.requiredContainer.blotName, {
        row: rowId,
        colspan,
        rowspan,
        'cell-bg': cellBg
      })
    }
    super.optimize(context)
  }

  // tableCell() {
  //   return this.parent
  // }

  // 简易 ul li 
  // static create(value) {
  //   const node = super.create();
  //   return node;
  // }

  // static formats(domNode) {
  //   return {};
  // }

  // // constructor(scroll, domNode) {
  // //   super(scroll, domNode);
  // // }

  // format(name, value) {
  //   return {}
  // }

  // optimize(context) {
  //   super.optimize(context)
  // }
}

TableCellUlLi.blotName = 'table-ul-li';
// TableCellUlLi.className = 'table-ul-li-class';
TableCellUlLi.tagName = 'LI';

TableCellUl.allowedChildren = [TableCellUlLi]
TableCellUlLi.requiredContainer = TableCellUl

export {
  TableCellUl,
  TableCellUlLi,
}