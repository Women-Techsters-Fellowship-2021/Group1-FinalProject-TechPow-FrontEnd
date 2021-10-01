import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function DefaultLayout({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

export default DefaultLayout;