import styles from './index.less';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useEffect, useRef } from 'react';
import Toolbar from './Toolbar';
import QuillBetterTable from 'quill-better-table';
import DivBlot from './div-blot';
import 'quill-better-table/dist/quill-better-table.css';

Quill.register(DivBlot, true)

Quill.register({
  'modules/better-table': QuillBetterTable
}, true)

export default function IndexPage() {
  const quillInstance = useRef();
  useEffect(() => {
    quillInstance.current = new Quill('.eee', {
      modules: {
        table: false,  // disable table module
        'better-table': {
          operationMenu: {
            items: {
              unmergeCells: {
                text: 'Another unmerge cells name'
              }
            }
          }
        },
        toolbar: {
          container: '.ttt'
        },
        keyboard: {
          bindings: QuillBetterTable.keyboardBindings
        }
      },
      theme: 'snow',
    })
  });
  return (
    <div>
      <h1 className={styles.title}>quill page</h1>
      <div className="ccc">
        <button onClick={() => {
          console.log(quillInstance.current?.root.innerHTML);
        }}>get html</button>
        <button onClick={() => {
          quillInstance.current?.clipboard.dangerouslyPasteHTML(testHtml)
        }}>set html</button>
        <Toolbar className="ttt" />
        <div className="eee" style={{height: 200}}></div>
      </div>
    </div>
  );
}

const testHtml = `
<div class="div-blot">div-blot</div>
<div>div-blot2</div>
`

// const testHtml = `
// <table class="quill-better-table" style="width: 172px;">
//   <tbody>
//     <tr>
//       <td>
//         123
//       </td>
//       <td >
//       </td>
//     </tr>
//     <tr>
//       <td>
//         123
//       </td>
//       <td >
//         dd
//       </td>
//     </tr>
//   </tbody>
// </table>
// `
