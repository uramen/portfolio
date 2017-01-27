import React, { Component } from 'react';
import styles from '../styles.scss';

import Item from './Item';


class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let works = this.props.data;
    return (
      <div className={styles.grid}>
        {works.map(work => {
          return <Item
            key={work.id}
            img={work.src}
            title={work.title}
            technology={work.technology}
            />
        })}
      </div>
    )
  }
}

export default ItemList;
