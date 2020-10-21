import React from "react";
import styles from "./scss/Pixel.module.scss";
import Button from "@material-ui/core/Button";

class PixelAddMenu extends React.Component {
	render() {
		return (
			<div className={styles.editor}>
				<p className={styles.desc}></p>
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

export default PixelAddMenu;
