import React from 'react';
import styles from './styles.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.navigationLeft}>
          <nav>
            <a href="#">
              <img src={require('../../assets/images/github-6-24.png')} alt="" />
            </a>
            <a href="#">
              <img src={require('../../assets/images/instagram-24.png')} alt="" />
            </a>
            <a href="#">
              <img src={require('../../assets/images/white-vkcom-24.png')} alt="" />
            </a>
          </nav>
        </div>
        <div className={styles.navigationRight}>
          <nav>
            <a href="#">works</a>
            <a href="#">about</a>
            <a href="#">contact</a>
          </nav>
        </div>
      </div>
      <div className={styles.logo}>
        <div>
          <h1>the inum</h1>
          <p>portfolio</p>
        </div>
      </div>
      <div className={styles.mouse}>
        <a href="#">
          <img src={require('../../assets/images/mouse.png')} alt="" />
          <h5>scroll down</h5>
          <img src={require('../../assets/images/arrow.png')} alt="" />
        </a>
      </div>
    </div>
  </div>
);

export default Header;
