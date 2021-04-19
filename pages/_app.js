import Head from 'next/head';
import Layout from '../components/Layout';
// import Footer from '../components/Footer';
import { motion } from 'framer-motion';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps, router }) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<motion.div
					key={router.route}
					initial="pageInitial"
					animate="pageAnimate"
					variants={{
						pageInitial: {
							opacity: 0,
						},
						pageAnimate: {
							opacity: 1,
						},
					}}>
					<Component {...pageProps} />
					{/* <Footer /> */}
				</motion.div>
			</Layout>
		</>
	);
};

export default MyApp;
