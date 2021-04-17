import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

const AppLinks = ({ darkIcons, googleSize, appleSize } = props ) => (
	<>
		<li className={styles.appLink} style={{width: appleSize + 'px'}}>
			<Link href="https://apps.apple.com/co/app/btg-pactual-colombia/id1512043909?l">
				<a>
					{
						darkIcons ?
							<img src="./images/img-appStore-dark.svg" alt="Descárgala en el App Store" /> :
							<img src="./images/img-appStore.svg" alt="Descárgala en el App Store" />
					}
				</a>
			</Link>
		</li>
		<li className={styles.appLink} style={{width: googleSize + 'px'}}>
			<Link href="https://play.google.com/store/apps/details?id=co.com.btgpactual.digital">
				<a>
					{
						darkIcons ? 
							<img src="./images/img-googlePlay-dark.svg" alt="Disponible en Google Play" /> :
							<img src="./images/img-googlePlay.svg" alt="Disponible en Google Play" />
					}
				</a>
			</Link>
		</li>
	</>
)

export default AppLinks