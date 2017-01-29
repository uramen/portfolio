import React, {Component, PropTypes} from 'react';
import styles from '../styles.scss';

class Item extends Component {
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
		);
	}
}

Item.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	technology: PropTypes.string.isRequired
};

export default Item;
