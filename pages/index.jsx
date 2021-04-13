import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Features from '../components/Features'
import SwiperModule from '../components/SwiperModule'

const HomePage = () => {
	return (
		<Layout>
			<Banner />
			<SwiperModule />
			<Features />
		</Layout>
	)
}

export default HomePage