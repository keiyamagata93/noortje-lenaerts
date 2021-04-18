import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const ball = () => {
	return (
		<>
			<Link href="/portfolio">
				<a
					className={styles.close}
					onClick={() => {
						window.history.back();
					}}>
					<IconContext.Provider value={{ size: '2rem' }}>
						<GrClose />
					</IconContext.Provider>
				</a>
			</Link>
			<div className={styles.movie}>
				<div className={styles.text}>
					<h1>Bouncing Ball</h1>
					<p>Frame by frame animation of a pink ball.</p>
				</div>
				<iframe
					title="vimeo-player"
					src="https://player.vimeo.com/video/514953964"
					frameBorder="0"
					allowFullScreen></iframe>
			</div>
		</>
	);
};

export default ball;
