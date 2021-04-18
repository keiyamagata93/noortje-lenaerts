import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const youme = () => {
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
					<h1>Everybody goes to sleep</h1>
					<p>Poster made from a quote from Maria-Elisabeth Niebius.</p>
					<p>
						“Everybody goes to sleep. Some like to nap during the day, some sleep
						through the night. Some need a lot of space, some curl up into little balls.
						Some listen to stories that carry them into the land op dreams. Sleeping
						recharges your energy so you’re ready to conquer the world the next day.”
					</p>
				</div>
				<div className={styles.images}>
					<img src="/images/work/you-me/poster.jpg" alt="you-me poster" />
					<img src="/images/work/you-me/apart/1.jpg" alt="you-me poster detail 1" />
					<img src="/images/work/you-me/apart/2.jpg" alt="you-me poster detail 2" />
					<img src="/images/work/you-me/apart/3.jpg" alt="you-me poster detail 3" />
					<img src="/images/work/you-me/apart/5.jpg" alt="you-me poster detail 4" />
					<img src="/images/work/you-me/apart/6.jpg" alt="you-me poster detail 5" />
					<img src="/images/work/you-me/apart/7.jpg" alt="you-me poster detail 6" />
					<img src="/images/work/you-me/apart/8.jpg" alt="you-me poster detail 7" />
					<img src="/images/work/you-me/apart/9.jpg" alt="you-me poster detail 8" />
					<img src="/images/work/you-me/apart/10.jpg" alt="you-me poster detail 9" />
					<img src="/images/work/you-me/apart/11.jpg" alt="you-me poster detail 10" />
					<img src="/images/work/you-me/apart/12.jpg" alt="you-me poster detail 11" />
					<img src="/images/work/you-me/apart/13.jpg" alt="you-me poster detail 12" />
					<img src="/images/work/you-me/apart/14.jpg" alt="you-me poster detail 13" />
					<img src="/images/work/you-me/apart/15.jpg" alt="you-me poster detail 14" />
					<img src="/images/work/you-me/apart/16.jpg" alt="you-me poster detail 15" />
				</div>
			</div>
		</>
	);
};

export default youme;
