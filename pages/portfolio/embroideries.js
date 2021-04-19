import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const embroideries = () => {
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
			<div className={styles.grid}>
				<div className={styles.text}>
					<h1>Embroideries Poster</h1>
					<p>Embroideries of objects in my apartment made in a poster.</p>
				</div>
				<div className={styles.images}>
					<img src="/images/home/embroideries.jpg" alt="embroideries poster" />
				</div>
			</div>
		</>
	);
};

export default embroideries;
