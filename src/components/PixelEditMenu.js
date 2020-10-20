import React from "react";
import styles from "./scss/Pixel.module.scss";
import Button from "./Button";

class PixelEditMenu extends React.Component {
	render() {
		return (
			<div className={styles.editor}>
				<div
					className={styles.editorPixel}
					style={{ backgroundColor: this.props.color }}
				></div>
				<p className={styles.desc}>{this.props.entry.description}</p>
				<Button handleFn={this.props.handleMenuClose}>zamknij</Button>
			</div>
		);
	}
}

export default PixelEditMenu;
