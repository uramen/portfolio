import React from 'react';
import styles from './styles.scss';

import Title from './components/Title';

const About = () => (
	<div className={styles.about}>
		<div className={styles.container}>
			<div className={styles.info}>
				<Title>hey people!</Title>
				<img src={require('../../assets/images/avatar.png')}/>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati voluptatem ex architecto eos, assumenda optio quasi
        illo hic magni culpa unde repudiandae expedita esse? Ratione
        ullam perspiciatis cum at consequatur?</p>
			</div>
		</div>
	</div>
);

export default About;
