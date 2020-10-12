import React from 'react';
import './index.module.scss';
import styles from './view.module.scss';
import Button from '@material-ui/core/Button';

const App = () => (
  <div className={styles.wrapper}>
    <div className={styles.logo}>
      <div className={styles.icon}></div>
      <h1 className={styles.projectName}>Lem<span className={styles.greenFont}>Med</span></h1>
    </div>
    <div className={styles.wrapperLogin}>
      <p className={styles.marginBottom7}>Witaj w Lem<span className={styles.greenFont}>Med</span></p>
      <p className={styles.font13}>Zaloguj się aby kontynuować</p>
    </div>
  </div>
);

export default App;
