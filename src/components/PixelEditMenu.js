import React from "react";
import styles from "./scss/Pixel.module.scss";
import Button from "@material-ui/core/Button";

class PixelEditMenu extends React.Component {
	render() {
		return (
			<div className={styles.editor}>
				<div
					className={styles.editorPixel}
					style={{ backgroundColor: this.props.color }}
				></div>
				<p className={styles.desc}>{this.props.entry.description}</p>
				<Button
					size="large"
					onClick={this.props.handleMenuClose}
					variant="contained"
					color="primary"
				>
					Zamknij
				</Button>
				<Button
					size="large"
					onClick={this.props.handleMenuClose}
					variant="contained"
					color="secondary"
				>
					Gotowe
				</Button>
			</div>
		);
	}
}

export default PixelEditMenu;
