import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import styles from '../../styles/project.module.scss';

const raf = () => {
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
					<h1>Raf In Drag</h1>
					<p>Portrait of a classmate in drag for secret santa.</p>
				</div>
				<div className={styles.images}>
					<img src="/images/home/raf.jpg" alt="illustration raf in drag" />
					<img
						src="/images/work/raf/detail.jpg"
						alt="illustration raf in drag detail 1"
					/>
					<img
						src="/images/work/raf/detail2.jpg"
						alt="illustration raf in drag detail 2"
					/>
					<img
						src="/images/work/raf/detail3.jpg"
						alt="illustration raf in drag detail 3"
					/>
					<img
						src="/images/work/raf/detail4.jpg"
						alt="illustration raf in drag detail 4"
					/>
					<img
						src="/images/work/raf/detail5.jpg"
						alt="illustration raf in drag detail 5"
					/>
				</div>
			</div>
		</>
	);
};

export default raf;
