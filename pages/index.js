import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Noortje Lenaerts</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<h1>Home</h1>
		</div>
	);
};

export default Home;
