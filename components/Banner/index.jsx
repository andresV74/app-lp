import React from 'react'
import AppLinks from '@components/AppLinks'
import styles from './styles.module.scss'

const Banner = () => (
	<section className={styles.banner}>
		<div className={styles.banner__container}>
			<div className={styles.banner__body}>
				<h2 className={styles.title}>
					<span className={styles.title__first}>APP</span>
					<span className={styles.title__last}>BTG Pactual</span>
				</h2>
				<h3 className={styles.body}>Una <strong>nueva</strong> forma de ir más allá en sus inversiones</h3>
				<ul className={styles.appLinks}>
					<AppLinks googleSize={'137'} appleSize={'135'} />
				</ul>
			</div>
			<div className={styles.banner__image}>
				<img src="/images/img-cellphone.png" />
			</div>
		</div>
	</section>
)

export default Banner