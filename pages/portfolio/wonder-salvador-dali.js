import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const krant = () => {
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
					<h1>Wonder / Salvador Dalí</h1>
					<p>
						Newspaper made from research i did for a picture book and poster inpired by
						Salvador Dalí.
					</p>
				</div>
				<div className={styles.images}>
					<img src="/images/work/krant/krantplooi.jpg" alt="krant dali geplooid" />
					<img src="/images/work/krant/voor.jpg" alt="krant dali voorkant" />
					<img src="/images/work/krant/P2.jpg" alt="krant dali 1" />
					<img src="/images/work/krant/P3.jpg" alt="krant dali 2" />
					<img src="/images/work/krant/P4.jpg" alt="krant dali 3" />
					<img src="/images/work/krant/P5.jpg" alt="krant dali 4" />
					<img src="/images/work/krant/P6.jpg" alt="krant dali 5" />
					<img src="/images/work/krant/achter.jpg" alt="krant dali achterkant" />
				</div>
			</div>
		</>
	);
};

export default krant;
