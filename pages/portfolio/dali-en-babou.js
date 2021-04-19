import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const dali = () => {
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
					<h1>Dalí &amp; Babou</h1>
					<p>
						A picturebook inspired from true events by the famous painter Salvador Dalí.
						He infact had a pet ocolot named babou that he took everywhere. Even on
						cruise ships and a restaurant in Manhatten.
					</p>
				</div>
				<div className={styles.images}>
					<img src="/images/work/boekje/boekje.jpg" alt="illustration wenen 1" />
					<img src="/images/work/boekje/bokje.jpg" alt="illustration wenen 2" />
					<img src="/images/work/boekje/P2.jpg" alt="illustration wenen 3" />
					<img src="/images/work/boekje/P3.jpg" alt="illustration wenen 4" />
					<img src="/images/work/boekje/P4.jpg" alt="illustration wenen 5" />
					<img src="/images/work/boekje/P5.jpg" alt="illustration wenen 6" />
					<img src="/images/work/boekje/P6.jpg" alt="illustration wenen 7" />
					<img src="/images/work/boekje/P7.jpg" alt="illustration wenen 8" />
					<img src="/images/work/boekje/P8.jpg" alt="illustration wenen 9" />
					<img src="/images/work/boekje/P9.jpg" alt="illustration wenen 10" />
					<img src="/images/work/boekje/P10.jpg" alt="illustration wenen 11" />
					<img src="/images/work/boekje/P11.jpg" alt="illustration wenen 12" />
					<img src="/images/work/boekje/P12.jpg" alt="illustration wenen 13" />
				</div>
			</div>
		</>
	);
};

export default dali;
