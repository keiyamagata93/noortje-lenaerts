import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const mulan = () => {
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
					<h1>Ik Maak Jullie Elk Tot Een Man</h1>
					<p>
						Vinyl cover for the song of the disney movie Mulan: i’ll make a man outta
						you (ik maar jullie elk tot een man). What makes a man a man? There is not
						one kind of ‘man’ and i wanted to step away from the masculine stereotype,
						that’s why when you slide the plastic of you see drag queens.
					</p>
				</div>
				<div className={styles.images}>
					<img src="/images/home/mulan.jpg" alt="mulan album cover 1" />
					<img src="/images/work/mulan/IMG_9070.jpg" alt="mulan album cover 2" />
					<img src="/images/work/mulan/IMG_9071.jpg" alt="mulan album cover 3" />
					<img src="/images/work/mulan/IMG_9074.jpg" alt="mulan album cover 4" />
					<img src="/images/work/mulan/IMG_9076.jpg" alt="mulan album cover 5" />
					<div className={styles.imagegrid}>
						<img
							src="/images/work/mulan/IMG_9082.jpg"
							alt="mulan album cover detail 1"
						/>
						<img
							src="/images/work/mulan/IMG_9083.jpg"
							alt="mulan album cover detail 2"
						/>
						<img
							src="/images/work/mulan/IMG_9084.jpg"
							alt="mulan album cover detail 3"
						/>
						<img
							src="/images/work/mulan/IMG_9085.jpg"
							alt="mulan album cover detail 4"
						/>
						<img
							src="/images/work/mulan/IMG_9086.jpg"
							alt="mulan album cover detail 5"
						/>
						<img
							src="/images/work/mulan/IMG_9088.jpg"
							alt="mulan album cover detail 6"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default mulan;
