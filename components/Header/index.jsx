import React from 'react'
import AppLinks from '../AppLinks'
import styles from './styles.module.scss'

const Header = () => (
    <header className={styles.header}>
      <div className={styles.header__container}>
				<div className={styles.logoWrapper}>
					<img className={styles.logo} src="./images/logo-BTG.svg" alt="BTG Pactual" />
					<div className={styles.name}>app</div>
				</div>
				<ul className={styles.appLinks}>
					<AppLinks darkIcons googleSize={'118'} appleSize={'105'} />
				</ul>
      </div>
    </header>
)

export default Header