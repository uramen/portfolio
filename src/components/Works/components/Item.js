import React, { Component } from 'react';
import styles from '../styles.scss';


class Item extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={styles.gridItem}>
      <div className={styles.image}>
        <img src={this.props.img}/>
        <a className={styles.whiteButton}>Get study</a>
      </div>
        <div className={styles.description}>
          <h2 className={styles.title}>
            {this.props.title}
          </h2>
          <p className={styles.technology}>
            {this.props.technology}
          </p>
        </div>

      </div>
    )
  }
}

export default Item;
