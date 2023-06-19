import React from "react";
import styles from "./PokeballLoader.module.css";

const PokeballLoader: React.FC = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.pokeball}></div>
		</div>
	);
};

export default PokeballLoader;
