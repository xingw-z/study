import styles from './index.less';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useEffect, useRef } from 'react';
import Toolbar from './Toolbar';

export default function IndexPage() {
  const quillInstance = useRef<Quill>();
  useEffect(() => {
    quillInstance.current = new Quill('.eee', {
      modules: {
        table: true,
        toolbar: {
          container: '.ttt'
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
          quillInstance.current?.clipboard.dangerouslyPasteHTML(testHtml)
        }}>test</button>
        <Toolbar className="ttt" />
        <div className="eee" style={{height: 200}}></div>
      </div>
    </div>
  );
}

const testHtml = `
<div>
123
<div>312</div>
123
</div>
`