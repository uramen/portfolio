import React, { Component } from 'react';
import styles from './styles.scss';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2 className={styles.title}>{this.props.children}</h2>
    )
  }
}
