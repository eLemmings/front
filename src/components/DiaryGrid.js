import React from "react";
import styles from "./scss/DiaryGrid.module.scss";
import Pixel from "./Pixel";

class DiaryGrid extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.diary.entries.map((entry, index) => {
          return (
            <Pixel
              key={index}
              index={index}
              color={this.props.diary.color}
              max={this.props.diary.max}
              entry={entry}
              pixelSize={this.props.pixelSize}
              handleOpenPixelEdit={this.props.handleOpenPixelEdit}
            />
          );
        })}
        {!this.props.shared &&
          <Pixel
            addPixel={true}
            pixelSize={this.props.pixelSize}
            handleOpenPixelAdd={this.props.handleOpenPixelAdd}
          />
        }
      </div>
    );
  }
}

export default DiaryGrid;
