import React, { Component, PropTypes } from 'react';
import styles from '../styles.scss';

import Item from './Item';

function ItemList({ works }) {
  return (
    <div className={styles.grid}>
      {works.map(work => (<Item
        key={work.id}
        src={work.src}
        title={work.title}
        technology={work.technology}
      />))}
    </div>
  );
}

ItemList.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object),
};

ItemList.defaultProps = {
  works: [],
};

export default ItemList;
