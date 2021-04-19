import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const wenen = () => {
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
					<h1>Things That Quicken The Heart</h1>
					<p>
						A conversation with my classmate about crying illustrated. We talked about
						our different ways of crying and I show this in a series of illustrations.
					</p>
				</div>
				<div className={styles.images}>
					<img src="/images/home/wenen.jpg" alt="illustration wenen" />
					<img src="/images/work/wenen/walk.jpg" alt="illustration wenen 15" />
					<img src="/images/work/wenen/bike.jpg" alt="illustration wenen 1" />
					<img src="/images/work/wenen/verwelkt.jpg" alt="illustration wenen 14" />
					<img src="/images/work/wenen/sun.jpg" alt="illustration wenen 12" />
					<img src="/images/work/wenen/cloud.jpg" alt="illustration wenen 2" />
					<img src="/images/work/wenen/tulp.jpg" alt="illustration wenen 13" />
					<img src="/images/work/wenen/shirt.jpg" alt="illustration wenen 10" />
					<img src="/images/work/wenen/phone.jpg" alt="illustration wenen 9" />
					<img src="/images/work/wenen/face.jpg" alt="illustration wenen 6" />
					<img src="/images/work/wenen/cups.jpg" alt="illustration wenen 3" />
					<img src="/images/work/wenen/kettle.jpg" alt="illustration wenen 8" />
					<img src="/images/work/wenen/wall.jpg" alt="illustration wenen 16" />
					<img src="/images/work/wenen/stairs.jpg" alt="illustration wenen 11" />
					<img src="/images/work/wenen/drown.jpg" alt="illustration wenen 5" />
					<img src="/images/work/wenen/deur.jpg" alt="illustration wenen 4" />
					<img src="/images/work/wenen/hand.jpg" alt="illustration wenen 7" />
				</div>
			</div>
		</>
	);
};

export default wenen;
