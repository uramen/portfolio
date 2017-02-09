import React, { Component, PropTypes } from 'react';
import styles from '../styles.scss';

function Item({ title, technology, src }) {
  return (
    <div className={styles.gridItem}>
      <div className={styles.image}>
        <img src={src} alt="" />
        <a className={styles.whiteButton}>Get study</a>
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles.technology}>
          {technology}
        </p>
      </div>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Item;
