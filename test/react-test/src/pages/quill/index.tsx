import styles from './index.less';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';
import Toolbar from './Toolbar';


export default function IndexPage() {
  useEffect(() => {
    const quill = new Quill('.eee', {
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
        <Toolbar className="ttt" />
        <div className="eee"></div>
      </div>
    </div>
  );
}
