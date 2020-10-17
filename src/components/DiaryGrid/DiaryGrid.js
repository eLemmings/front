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
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
          <div className={styles.diaryItem}></div>
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
