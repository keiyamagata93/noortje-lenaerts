import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

// import { FaBehance, FaInstagram } from 'react-icons/fa';
// import { IconContext } from 'react-icons';

import style from '../styles/contact.module.scss';

const contact = () => {
	return (
		<div>
			<Head>
				<title>Noortje Lenaerts | Contact</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={style.contact}>
				<h1>Get In Touch</h1>
				<div className={style.email}>
					<h2>Send me an e-mail</h2>
					<a
						className={style['email-link']}
						href="mailto:noortjelenaerts97@gmail.com"
						rel="noopener noreferrer"
						target="_blank">
						Send Message
					</a>
				</div>
				<div className={style['social-links']}>
					<h2>Socials</h2>
					<div className={style.icons}>
						<a href="">
							<Image src="/images/behance.png" width={50} height={50} />
						</a>
						<a href="">
							<Image src="/images/instagram.png" width={50} height={50} />
						</a>
					</div>
				</div>
			</main>
		</div>
	);
};

export default contact;
