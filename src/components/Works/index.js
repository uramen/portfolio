import React, {Component} from 'react';

import Title from '../About/components/Title';
import ItemList from './components/ItemList';

import data from './data.json';
import styles from './styles.scss';

class Works extends Component {

	render() {
		return (
			<div className={styles.works}>
				<div className={styles.wrapper}>
					<Title>Selected work</Title>
				</div>
				<ItemList data={data}/>
				<div className={styles.wrapper}>
					<a className={styles.blackButton}>All projeckts</a>
				</div>
			</div>
		);
	}
}

export default Works;
