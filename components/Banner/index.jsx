import React from 'react'
import AppLinks from '../AppLinks'
import styles from './styles.module.scss'

const Banner = () => (
	<section className={styles.banner}>
		<div className={styles.banner__container}>
			<div className={styles.banner__body}>
				<h2 className={styles.title}>
					<span className={styles.title__last}> BTG Pactual</span>
					<span className={styles.title__first}>app</span>
				</h2>
				<h3 className={styles.body}>Más asesoría, más conectividad con usted y sus inversiones</h3>
			</div>
			<ul className={styles.banner__appLinks}>
				<AppLinks googleSize={'137'} appleSize={'135'} />
			</ul>
			<div className={styles.banner__image}>
				<img src="./images/img-cellphone.png" />
			</div>
		</div>
	</section>
)

export default Banner