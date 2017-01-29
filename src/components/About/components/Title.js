import React, {Component, PropTypes} from 'react';

class Title extends Component {
	render() {
		return (
			<h2 style={styles.title}>{this.props.children}</h2>
		);
	}
}

Title.propTypes = {
	children: PropTypes.node
};

const styles = {
	title: {
		color: '#333333',
		fontFamily: 'Lato-Regular',
		fontWeight: 'normal',
		fontSize: '30px',
		textTransform: 'uppercase'
	}
};

export default Title;
