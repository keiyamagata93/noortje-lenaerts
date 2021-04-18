import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const walks = () => {
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
					<h1>Sketches Of Antwerp</h1>
					<p>Some sketches of some quarantine walks in Antwerp.</p>
				</div>
				<div className={styles.images}>
					<img src="/images/home/walk.jpg" alt="antwerp walk illustration 1" />
					<img src="/images/work/walks/3.jpg" alt="antwerp walk illustration 3" />
					<img src="/images/work/walks/4.jpg" alt="antwerp walk illustration 4" />
					<img src="/images/work/walks/6.jpg" alt="antwerp walk illustration 5" />
					<img src="/images/work/walks/7.jpg" alt="antwerp walk illustration 6" />
					<img src="/images/work/walks/2.jpg" alt="antwerp walk illustration 2" />
				</div>
			</div>
		</>
	);
};

export default walks;
