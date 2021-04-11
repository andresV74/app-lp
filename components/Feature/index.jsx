import React from 'react'
import styles from './styles.module.scss'

const Feature = ({image, text} = props) => (
	<div className={styles.feature}>
		<img src={image} />
		<p className={styles.text}>{text}</p>
	</div>
)

export default Feature