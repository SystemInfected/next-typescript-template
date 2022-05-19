import Head from 'next/head'
import styles from '../styles/Start.module.scss'

export default function Start() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Next + typescript ❤️</title>
			</Head>
			<h1>Next + typescript ❤️</h1>
		</div>
	)
}
