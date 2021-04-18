import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const tram = () => {
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
			<div className={styles.grid}>
				<div className={styles.text}>
					<h1>Subway Linocut</h1>
					<p>Linocut of the subway in Antwerp.</p>
				</div>
				<div className={styles.images}>
					<img src="/images/home/linocut-tram.jpg" alt="linocut tram" />
				</div>
			</div>
		</>
	);
};

export default tram;
