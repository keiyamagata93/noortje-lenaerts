import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const symphony = () => {
	return (
		<>
			<Link href="/portfolio">
				<a
					className={styles.close}
					onClick={() => {
						window.history.go(-1);
					}}>
					<IconContext.Provider value={{ size: '2rem' }}>
						<GrClose />
					</IconContext.Provider>
				</a>
			</Link>
			<div className={styles.movie}>
				<div className={styles.text}>
					<h1>The Symphony</h1>
					<p>
						Frame by frame animation inspired by chapter 132 of Moby Dick by Herman
						Melville called ‘The Symphony’.​​​​​​
					</p>
				</div>
				<iframe
					title="vimeo-player"
					src="https://player.vimeo.com/video/523851022"
					frameBorder="0"
					allowFullScreen
					className={styles.symphony}></iframe>
			</div>
		</>
	);
};

export default symphony;
