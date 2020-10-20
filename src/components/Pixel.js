import React from "react";
import styles from "./scss/Pixel.module.scss";
import PixelMenu from "./PixelMenu";

class Pixel extends React.Component {
	state = {
		active: false,
	};

	handleToggle = () => {
		this.setState({active: !this.state.active});
	};

	render() {
		return (
			<>
				<div
					className={styles.pixel}
					style={{
						backgroundColor: this.props.entry.color,
						flexBasis: `calc(${100 / this.props.pixelSize}% - 6px)`,
					}}
					onClick={this.handleToggle}
				></div>
				{this.state.active && (
					<PixelMenu
						entry={this.props.entry}
						handleToggle={this.handleToggle}
					></PixelMenu>
				)}
			</>
		);
	}
}

export default Pixel;
