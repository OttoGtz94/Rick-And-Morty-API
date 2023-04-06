import React from 'react';
import { Outlet } from 'react-router-dom';
import Cards from '../layout/Cards';
import Header from '../layout/Header';

const Home = () => {
	return (
		<div>
			<Header />
			<Outlet />
			{/* <Cards /> */}
		</div>
	);
};

export default Home;
