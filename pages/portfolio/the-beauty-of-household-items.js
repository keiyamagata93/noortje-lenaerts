import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const beauty = () => {
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
					<h1>The Beauty Of Household Items</h1>
					<p>
						Illustrations for my bachelor script on my fascination of the beauty of
						household items.
					</p>
				</div>
				<div className={styles.images}>
					<img src="/images/work/household-items/eten.jpg" alt="household items" />
					<div className={styles.imagegrid}>
						<img
							src="/images/work/household-items/etendetail1.jpg"
							alt="household items detail 1"
						/>
						<img
							src="/images/work/household-items/etendetail2.jpg"
							alt="household items detail 2"
						/>
						<img
							src="/images/work/household-items/etendetail3.jpg"
							alt="household items detail 3"
						/>
						<img
							src="/images/work/household-items/etendetail4.jpg"
							alt="household items detail 4"
						/>
					</div>
					<img src="/images/work/household-items/keuken.jpg" alt="household items" />
					<div className={styles.imagegrid}>
						<img
							src="/images/work/household-items/keukendetail1.jpg"
							alt="household items detail 1"
						/>
						<img
							src="/images/work/household-items/keukendetail2.jpg"
							alt="household items detail 2"
						/>
						<img
							src="/images/work/household-items/keukendetail3.jpg"
							alt="household items detail 3"
						/>
						<img
							src="/images/work/household-items/keukendetail4.jpg"
							alt="household items detail 4"
						/>
					</div>
					<img src="/images/work/household-items/poets.jpg" alt="household items" />
					<div className={styles.imagegrid}>
						<img
							src="/images/work/household-items/poetsdetail1.jpg"
							alt="household items detail 1"
						/>
						<img
							src="/images/work/household-items/poetsdetail2.jpg"
							alt="household items detail 2"
						/>
						<img
							src="/images/work/household-items/poetsdetail3.jpg"
							alt="household items detail 3"
						/>
						<img
							src="/images/work/household-items/poetsdetail4.jpg"
							alt="household items detail 4"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default beauty;
