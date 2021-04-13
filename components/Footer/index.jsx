import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import AppLinks from '../AppLinks'

const Footer = () => (
	<footer className={styles.footer}> 
		<div className={styles.footer__content}>
			<ul className={styles.footer__menu}> 
				<li><Link href="/"><a className={styles.menuLink}>Contacto</a></Link></li>
				<li><Link href="/"><a className={styles.menuLink}>Términos de uso</a></Link></li>
				<li><Link href="/"><a className={styles.menuLink}>Protección de datos</a></Link></li>
			</ul>
			<ul className={styles.footer__options}> 
				<li className={styles.optionsLink}><Link href="/"><a href="#"><img src="./images/img-linkedin.png" alt="LinkedIn BTG pactual" srcSet="./images/img-linkedin@2x.png 2x" /></a></Link></li>
				<AppLinks googleSize={'105'} appleSize={'105'} />
			</ul>
			<p className={styles.footer__disclaimer}>“El presente material ha sido proporcionado a ustedes por parte de BTG Pactual con fines meramente informativos y no constituye una oferta para comprar o vender valores o activos ni un asesoramiento en materia legal, tributaria, empresarial o contable”</p>
			<p className={styles.footer__copyright}>© 2021 BTG Pactual</p><img className={styles.footer__watched} src="./images/img-vigilado.png" alt="VIGILADO SUPERINTENDENCIA FINANCIERA DE COLOMBIA" srcSet="./images/img-vigilado@2x.png 2x" />
			<p className={styles.footer__signatures}>BTG Pactual S.A. Comisionista de Bolsa<br />BTG Pactual Sociedad Fiduciaria S.A.</p>
		</div>
	</footer>


)

export default Footer