import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

import styles from '../../styles/portfolio.module.scss';

const portfolio = () => {
	return (
		<>
			<Head>
				<title>Noortje Lenaerts | Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={styles.maincontainer}>
				<Link href="/portfolio/the-beauty-of-household-items">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>The Beauty Of Household Items</h2>
							</div>
							<Image
								src="/images/work/household-items/eten.jpg"
								alt="household items illustration"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>
				<Link href="/portfolio/bonsai">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Bonsai</h2>
							</div>
							<Image
								src="/images/home/bonsai.gif"
								alt="bonsai animation"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/japanese-house">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Japanese House</h2>
							</div>
							<Image
								src="/images/home/house.jpg"
								alt="house illustration"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/stairs">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Stairs</h2>
							</div>
							<Image
								src="/images/home/stairs.jpg"
								alt="stairs illustation"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/bouncing-ball">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Bouncing Ball</h2>
							</div>
							<Image
								src="/images/home/ball.gif"
								alt="ball animation"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/turning-light">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Turning Light</h2>
							</div>
							<Image
								src="/images/home/girl.gif"
								alt="girl animation"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/sketches-of-antwerp">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Sketches Of Antwerp</h2>
							</div>
							<Image
								src="/images/home/walk.jpg"
								alt="sketch of antwerp illustation"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/everybody-goes-to-sleep">
					<a id="youme">
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Everybody goes to sleep</h2>
							</div>
							<Image
								src="/images/home/sleep.jpg"
								alt="everybody goes to sleep poster"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/things-that-quicken-the-heart">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Things That Quicken The Heart</h2>
							</div>
							<Image
								src="/images/home/wenen.jpg"
								alt="wenen"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/a-matter-of-perspective">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>A Matter of Perspective</h2>
							</div>
							<Image
								src="/images/home/aMatterOfPerspective.jpg"
								alt="a matter of perspective illustration"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/the-symphony">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>The Symphony</h2>
							</div>
							<Image
								src="/images/home/symphony.gif"
								alt="the symphony animation"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/spinning-lucky-cat">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Spinning Lucky Cat</h2>
							</div>
							<Image
								src="/images/home/luckycat.gif"
								alt="lucky cat animation"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/subway-linocut">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Subway Linocut</h2>
							</div>
							<Image
								src="/images/home/linocut-tram.jpg"
								alt="linocut tram"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/raf-in-drag">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Raf In Drag</h2>
							</div>
							<Image
								src="/images/home/raf.jpg"
								alt="raf in drag"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/wonder-salvador-dali">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Wonder / Salvador Dali</h2>
							</div>
							<Image
								src="/images/home/krant.gif"
								alt="krant"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/ik-maak-jullie-elk-tot-een-man">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Ik maak jullie elk tot een man</h2>
							</div>
							<Image
								src="/images/home/mulan.jpg"
								alt="mulan album cover"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/dali-en-babou">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Dalí &amp; Babou</h2>
							</div>
							<Image
								src="/images/home/boekje.jpg"
								alt="Dali &amp; Babou"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>

				<Link href="/portfolio/embroideries">
					<a>
						<div className={styles.project}>
							<div className={styles.title}>
								<h2>Poster Based On Embroideries</h2>
							</div>
							<Image
								src="/images/home/embroideries.jpg"
								alt="Embroideries"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>
			</main>
		</>
	);
};

export default portfolio;
