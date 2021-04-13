import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

const AppLinks = ({ darkIcons, googleSize, appleSize } = props ) => (
	<>
		<li className={styles.appLink} style={{width: googleSize + 'px'}}>
			<Link href="/">
				<a href="#">
					{
						darkIcons ? 
							<img src="./images/img-googlePlay-dark.svg" alt="Descárgala en el App Store" /> :
							<img src="./images/img-googlePlay.svg" alt="Descárgala en el App Store" />
					}
				</a>
			</Link>
		</li>
		<li className={styles.appLink} style={{width: appleSize + 'px'}}>
			<Link href="/">
				<a href="#">
					{
						darkIcons ?
					<img src="./images/img-appStore-dark.svg" alt="Disponible en Google Play" /> :
					<img src="./images/img-appStore.svg" alt="Disponible en Google Play" />
					}
				</a>
			</Link>
		</li>
	</>
)

export default AppLinks