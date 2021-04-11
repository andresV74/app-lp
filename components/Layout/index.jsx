import React from 'react'
import Header from '@components/header'
import Footer from '@components/Footer'

const Layout = ({ children }) => (
	<>
		<Header />
		<div className="container">
			{ children }
		</div>
		<Footer />
	</>
)

export default Layout