import Quill  from "quill";

const Container = Quill.import('blots/container');
const Block = Quill.import('blots/block');

class TableUlListContainer extends Container {};
TableUlListContainer.blotName = 'table-ul-container';
TableUlListContainer.tagName = 'UL';
TableUlListContainer.className = 'table-ul';

const TableCell = Quill.import('table');

class TableUlListItem extends Block {
  static create(value) {
    const node = super.create();
    // node.setAttribute('data-list', value);
    node.setAttribute('class', this.className);
    return node;
  }

  static formats(domNode) {
    return {};
  }

  static register() {
    Quill.register(TableUlListContainer);
  }

  constructor(scroll, domNode) {
    super(scroll, domNode);
    // const ui = domNode.ownerDocument.createElement('span');
    // const listEventHandler = e => {
    //   if (!scroll.isEnabled()) return;
    //   const format = this.statics.formats(domNode, scroll);
    //   if (format === 'checked') {
    //     this.format('list', 'unchecked');
    //     e.preventDefault();
    //   } else if (format === 'unchecked') {
    //     this.format('list', 'checked');
    //     e.preventDefault();
    //   }
    // };
    // ui.addEventListener('mousedown', listEventHandler);
    // ui.addEventListener('touchstart', listEventHandler);
    // this.attachUI(ui);
  }

  format(name, value) {
    if (name === this.statics.blotName && value) {
      // this.domNode.setAttribute('data-list', value);
    } else {
      super.format(name, value);
    }
  }
}

TableUlListItem.blotName = 'list';
TableUlListItem.tagName = 'LI';
TableUlListItem.className = 'table-ul-li'

TableUlListContainer.allowedChildren = [TableUlListItem];
TableUlListItem.requiredContainer = TableUlListContainer;

export default TableUlListItem;
