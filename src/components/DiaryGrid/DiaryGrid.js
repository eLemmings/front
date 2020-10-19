import React from "react";
import styles from "./DiaryGrid.module.scss";
import Pixel from "../Pixel/Pixel";

class DiaryGrid extends React.Component {
  state = {
    diary: this.props.diary, // push to database
  };

  updatePixel = () => {};

  render() {
    const diary = this.props.diary;
    const entries = [].concat(...diary.entries);

    return (
      <div className={styles.wrapper}>
        {entries.map((entry) => (
          <Pixel
            entry={{ ...entry, color: diary.colors[entry.value] }}
            pixelSize={this.props.sliderValue}
            handleUpdate={this.updatePixel}
          />
        ))}
      </div>
    );
  }
}

export default DiaryGrid;
