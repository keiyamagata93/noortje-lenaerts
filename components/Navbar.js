import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import style from '../styles/navbar.module.scss';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className={style.header}>
			<nav className={style.header__nav}>
				<div className={style.logo}>
					<Link href="/">
						<a>Noortje Lenaerts</a>
					</Link>
				</div>
				<div className={style['menu-items'] + ' ' + (open ? style.active : null)}>
					<ul>
						<li className={style.home}>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/portfolio">
								<a>Portfolio</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a>Contact</a>
							</Link>
						</li>
					</ul>
					<div className={style.socials}>
						<a
							href="https://www.behance.net/noortjelenaerts"
							target="_blank"
							className={style.sociallink}>
							<Image
								src="/images/behance.png"
								alt="link to behance page"
								height={50}
								width={50}
							/>
						</a>
						<a
							href="https://www.instagram.com/lenaerts.noortje/?hl=nl"
							target="_blank"
							className={style.sociallink}>
							<Image
								src="/images/instagram.png"
								alt="link to instagram page"
								height={50}
								width={50}
							/>
						</a>
					</div>
				</div>

				<div
					className={style.menu + ' ' + (open ? style.active : null)}
					onClick={() => {
						setOpen(!open);
					}}>
					<div className={style.ham_top}></div>
					<div className={style.ham_mid}></div>
					<div className={style.ham_bot}></div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
