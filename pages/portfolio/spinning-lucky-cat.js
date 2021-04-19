import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const luckycat = () => {
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
				<h1>Spinning Lucky Cat</h1>
				<p>Frame by frame animation of a white lucky cat.</p>
				<iframe
					title="vimeo-player"
					src="https://player.vimeo.com/video/488695851"
					frameborder="0"
					allowFullScreen></iframe>
			</div>
		</>
	);
};

export default luckycat;
