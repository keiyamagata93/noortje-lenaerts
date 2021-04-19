import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const house = () => {
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
					<h1>Japanese House</h1>
					<p>
						After my graduation I wanted to travel to Japan, but due to covid my plans
						are delayed. So in pending that I have made this illustration of a Japanese
						house.
					</p>
				</div>
				<div className={styles.images}>
					<img src="/images/home/house.jpg" alt="bonsai animation" />
					<div className={styles.imagegrid}>
						<img src="/images/work/house/detail1.jpg" alt="house detail 1" />
						<img src="/images/work/house/detail2.jpg" alt="house detail 2" />
						<img src="/images/work/house/detail3.jpg" alt="house detail 3" />
						<img src="/images/work/house/detail4.jpg" alt="house detail 4" />
					</div>
					<img src="/images/work/house/poster.jpg" alt="poster of house" />
				</div>
			</div>
		</>
	);
};

export default house;
