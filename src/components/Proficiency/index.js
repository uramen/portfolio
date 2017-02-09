// @flow

import React from 'react';
import styles from './styles.scss';

const Proficiency = () => (
  <div className={styles.proficiency}>
    <div className={styles.wrapper} data-anim="base wrapper">
      <div className={styles.circle} data-anim="base left" />
      <div className={styles.circle} data-anim="base right" />
    </div>
    <div className={[styles.wrapper, styles.wrapper1]} data-anim="base wrapper">
      <div className={styles.circle} data-anim="base left" />
      <div className={styles.circle} data-anim="base right" />
    </div>
  </div>
);

const str: string = 'hello flow!';
console.log(str);

export default Proficiency;
