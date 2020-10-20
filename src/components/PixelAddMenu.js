import React from "react";
import styles from "./scss/Pixel.module.scss";
import Button from "./Button";

class PixelAddMenu extends React.Component {
	render() {
		return (
			<div className={styles.editor}>
				<p className={styles.desc}>Dodaj pixel</p>
				<Button handleFn={this.props.handleMenuClose}>zamknij</Button>
			</div>
		);
	}
}

export default PixelAddMenu;
