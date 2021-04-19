import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const bonsai = () => {
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
			<main className={styles.movie}>
				<div className={styles.text}>
					<h1>Bonsai</h1>
					<p>Frame by frame animation of a growing bonsai tree.</p>
				</div>
				<iframe
					title="vimeo-player"
					src="https://player.vimeo.com/video/532584445"
					width="2000px"
					height="2000px"
					frameBorder="0"
					allowFullScreen></iframe>
			</main>
		</>
	);
};

export default bonsai;
