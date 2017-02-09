import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Title from '../About/components/Title';
import ItemList from './components/ItemList';

import styles from './styles.scss';

function Works({ works }) {
  return (
    <div className={styles.works}>
      <div className={styles.wrapper}>
        <Title>Selected work</Title>
      </div>
      <ItemList works={works} />
      <div className={styles.wrapper}>
        <a className={styles.blackButton}>All projeckts</a>
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    works: state.works,
  };
}

Works.propTypes = {
  works: React.PropTypes.arrayOf(React.PropTypes.object),
};

Works.defaultProps = {
  works: [],
};

export default connect(mapStateToProps)(Works);
