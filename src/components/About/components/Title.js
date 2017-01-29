import React, { Component } from 'react';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2 style={styles.title}>{this.props.children}</h2>
    )
  }
}


var styles = {
  title: {
    color: "#333333",
    fontFamily: "Lato-Regular",
    fontWeight: "normal",
    fontSize: "30px",
    textTransform: "uppercase"
  }
}
