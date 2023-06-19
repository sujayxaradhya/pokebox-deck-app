import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<>
			<nav className={styles.navbar}>
				<Link to="/">
					<img
						src={logo}
						alt="PokéBox Logo"
						onClick={closeMenu}
						className={styles.nav_logo}
					/>
				</Link>
				<ul className={styles.navbar__nav}>
					<li className={styles.nav__item}>
						<Link to="/" className={styles.nav__link}>
							Home
						</Link>
					</li>
					<li className={styles.nav__item}>
						<Link to="/about" className={styles.nav__link}>
							About
						</Link>
					</li>
					<li className={styles.nav__item}>
						<a
							href="mailto:themoguldev@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.nav__link}
						>
							Contact
						</a>
					</li>
				</ul>

				<div className={styles.hamburger} onClick={toggleMenu}>
					{isOpen ? (
						<div className={styles.crossIcon}>×</div>
					) : (
						<>
							<div className={styles.bar}></div>
							<div className={styles.bar}></div>
							<div className={styles.bar}></div>
						</>
					)}
				</div>
			</nav>

			{isOpen && (
				<nav className={styles.mobile_menu}>
					<ul className={styles.nav_mobile_menu}>
						<li onClick={closeMenu}>
							<Link to="/" className={styles.mobile_nav__link}>
								Home
							</Link>
						</li>
						<li onClick={closeMenu}>
							<Link to="/about" className={styles.mobile_nav__link}>
								About
							</Link>
						</li>
						<li onClick={closeMenu}>
							<a
								href="mailto:themoguldev@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.mobile_nav__link}
							>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

export default Navbar;
