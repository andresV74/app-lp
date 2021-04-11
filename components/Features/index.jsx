import React from 'react'
import AppLinks from '@components/AppLinks'
import Feature from '@components/Feature'
import styles from './styles.module.scss'

const Features = () => (
	<section className={styles.features}>
		<ul className={styles.features__container}>
			<Feature image={'images/ico-feature-1.svg'} text={'Contacto, asesoría, preguntas y respuestas, actualización de datos, peticiones, quejas y reclamos; todo al alcance de sus manos.'} />
			<Feature image={'images/ico-feature-2.svg'} text={'Nuestra prioridad: mantener la seguridad de sus datos. Nuestra app cumple con los más altos protocolos de seguridad.'} />
			<Feature image={'images/ico-feature-3.svg'} text={'Autenticación multifactor que asegura aún más sus movimientos y transacciones.'} />
		</ul>
		<ul className={styles.features__appLinks}>
			<AppLinks googleSize={'135'} appleSize={'133'} />
		</ul>
	</section>
)

export default Features