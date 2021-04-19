import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const girl = () => {
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
					<h1>Turning Light</h1>
					<p>
						Frame by frame animation of lights circling around a girl with a lot of
						contrast.
					</p>
				</div>
				<iframe
					title="vimeo-player"
					src="https://player.vimeo.com/video/519567665"
					frameborder="0"
					allowFullScreen></iframe>
			</div>
		</>
	);
};

export default girl;
