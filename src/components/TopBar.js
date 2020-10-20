import React from "react";
import Button from "./Button";
import styles from "./scss/TopBar.module.scss";
import Menu from "./Menu";

const TopBar = ({ handleChangeFn, title, options, activeItem }) => {
	return (
		<div className={styles.wrapper}>
			{/* <Menu options={options} activeItem={activeItem} /> */}
			<div className={styles.center}>
				<Button handleFn={() => handleChangeFn(-1)}>&lt;</Button>
				<p>{title}</p>
				<Button handleFn={() => handleChangeFn(1)}>&gt;</Button>
			</div>
		</div>
	);
};

export default TopBar;
