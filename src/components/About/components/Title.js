import React, { PropTypes } from 'react';

const styles = {
  title: {
    color: '#333333',
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: '30px',
    textTransform: 'uppercase',
  },
};

function Title({ children }) {
  return (
    <h2 style={styles.title}>{children}</h2>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};


export default Title;
