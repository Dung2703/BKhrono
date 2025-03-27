import styles from './TopBar.module.css';

const TopBar = () => {

	return (
		<div className={styles.container}>
			<button className={styles.fileButton}>.txt file</button>
			<div className={styles.divider}></div>
			<button className={styles.fileButton}>.pdf file</button>
			<button className={styles.fileButton}>.xlsx file</button>
		</div>
	);
};

export default TopBar;