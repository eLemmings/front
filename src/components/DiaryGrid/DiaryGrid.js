import { Slider } from "@material-ui/core";
import React from "react";
import styles from "./DiaryGrid.module.scss";

class DiaryGrid extends React.Component {
  handleSliderChange = (e, value) => {
    const items = document.querySelectorAll("[class*='diaryItem']");
    items.forEach((item) => {
      item.style.flexBasis = `calc(${100 / value}% - 6px)`;
    });
  };

  render() {
    const diary = this.props.diary;
    const entries = [].concat.apply([], diary.entries);
    return (
      <>
        <div className={styles.wrapper}>
          {entries.map((entry, index) => (
            <div className={styles.diaryItem} key={index}>
              {entry}
            </div>
          ))}
        </div>
        <div className={styles.sliderWrapper}>
          <Slider
            defaultValue={4}
            aria-labelledby="discrete-slider"
            step={1}
            min={2}
            max={10}
            onChange={this.handleSliderChange}
          />
        </div>
      </>
    );
  }
}

export default DiaryGrid;
