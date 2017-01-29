import React from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Works from '../components/Works';
import Proficiency from '../components/Proficiency';

import styles from './styles.scss';

const App = () => (
	<div className={styles.app}>
		<Header/>
		<About/>
		<Works/>
		<Proficiency/>
	</div>
);

export default App;
