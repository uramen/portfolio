import React from 'react';
import styles from './styles.scss';

import Header from "../components/Header"
import About from "../components/About"


const App = () => (
  <div className={styles.app}>
    <Header />
    <About />
  </div>
);

export default App;
