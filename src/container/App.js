import React from 'react';
import styles from './styles.scss';

import Header from '../components/Header';
import About from '../components/About';
import Works from '../components/Works';


const App = () => (
  <div className={styles.app}>
    <Header />
    <About />
    <Works />
  </div>
);

export default App;
