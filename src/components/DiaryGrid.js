import React from "react";
import styles from "./scss/DiaryGrid.module.scss";
import Pixel from "./Pixel";

class DiaryGrid extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				{this.props.diary.entries.map((entry, index) => (
					<Pixel
						index={index}
						color={this.props.diary.colors[entry.value-1]}
						pixelSize={this.props.pixelSize}
						handleOpenPixelEdit={this.props.handleOpenPixelEdit}
					/>
				))}
				<Pixel
					addPixel={true}
					pixelSize={this.props.pixelSize}
					handleOpenPixelAdd={this.props.handleOpenPixelAdd}
				/>
			</div>
		);
	}
}

export default DiaryGrid;
