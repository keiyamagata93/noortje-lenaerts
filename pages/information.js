import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import style from '../styles/information.module.scss';

const contact = () => {
	return (
		<div>
			<Head>
				<title>Noortje Lenaerts | Information</title>
			</Head>
			<Navbar />
			<main className={style.info}>
				<div className={style.picture}>
					<Image
						src="/images/profielfoto.jpg"
						alt="profile picture"
						width={1000}
						height={1000}
					/>
				</div>
				<div className={style.text}>
					<h1>Hello!</h1>
					<p>
						My name is Noortje Lenaerts. I live in Antwerp and currently I am studying
						illustration at Sint-Lucas. I have a big love for contrast and texture.
					</p>
					<p>For any projects, commissions or questions, contact me via mail.</p>
					<p>
						<a
							href="mailto:noortjelenaerts97@gmail.com"
							rel="noopener noreferrer"
							target="_blank">
							noortjelenaerts97@gmail.com
						</a>
					</p>
					<p>
						Socials:{' '}
						<a
							href="https://www.behance.net/noortjelenaerts"
							target="_blank"
							className={style.sociallinks}>
							Behance
						</a>
						<a
							href="https://www.instagram.com/lenaerts.noortje/?hl=nl"
							target="_blank"
							className={style.sociallinks}>
							Instagram
						</a>
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default contact;
