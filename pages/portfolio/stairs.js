import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const stairs = () => {
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
					<h1>Stairs</h1>
					<p>An illustration of the stairs in my apartment building.</p>
				</div>
				<div className={styles.images}>
					<img src="/images/home/stairs.jpg" alt="stairs illustration" />
				</div>
			</div>
		</>
	);
};

export default stairs;
