import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const perspective = () => {
	return (
		<>
			<Link href="/portfolio">
				<a
					className={styles.close}
					onClick={() => {
						history.back();
					}}>
					<IconContext.Provider value={{ size: '2rem' }}>
						<GrClose />
					</IconContext.Provider>
				</a>
			</Link>
			<div className={styles.grid}>
				<div className={styles.text}>
					<h1>A Matter Of Perspective</h1>
					<p>
						Two illustrations from two different perspectives. Every point of view shows
						an other story.
					</p>
				</div>
				<div className={styles.images}>
					<img
						src="/images/home/aMatterOfPerspective.jpg"
						alt="illustration a matter of perspective"
					/>
					<img
						src="/images/work/matter-of-perspective/aMatterOfPerspective_2.jpg"
						alt="illustration wenen 1"
					/>
					<div className={styles.imagegrid}>
						<img
							src="/images/work/matter-of-perspective/detail1.jpg"
							alt="house detail 1"
						/>
						<img
							src="/images/work/matter-of-perspective/detail2.jpg"
							alt="house detail 2"
						/>
						<img
							src="/images/work/matter-of-perspective/detail3.jpg"
							alt="house detail 3"
						/>
						<img
							src="/images/work/matter-of-perspective/detail4.jpg"
							alt="house detail 4"
						/>
						<img
							src="/images/work/matter-of-perspective/detail5.jpg"
							alt="house detail 4"
						/>
						<img
							src="/images/work/matter-of-perspective/detail6.jpg"
							alt="house detail 4"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default perspective;
