import { Slider } from "@material-ui/core";
import React from "react";
import styles from "./DiaryGrid.module.scss";
import "./DiaryGrid.css";

class DiaryGrid extends React.Component {
  handleSliderChange = (e, value) => {
    const items = document.querySelectorAll("[class*='diaryItem']");
    items.forEach((item) => {
      item.style.flexBasis = `calc(${100 / value}% - 6px)`;
    });
  };

  handlePixelClick = (e) => {
    const menu = e.target.nextSibling;
    if (menu.className.includes("Active")) {
      menu.className = "diaryItemManage";
    } else {
      menu.className = "diaryItemManageActive";
    }
  };

  handlePixelClose = (e) => {
    const menu = e.target.parentNode;
    if (menu.className.includes("Active")) {
      menu.className = "diaryItemManage";
    } else {
      menu.className = "diaryItemManageActive";
    }
  };

  render() {
    const diary = this.props.diary;
    const entries = [];
    for (const entry of diary.entries) {
      for (const o of entry) {
        entries.push({ value: o.value, desc: o.description });
      }
    }
    return (
      <>
        <div className={styles.wrapper}>
          {entries.map((entry, index) => (
            <>
              <div
                className={styles.diaryItem}
                key={index}
                style={{ backgroundColor: diary.colors[entry.value] }}
                onClick={this.handlePixelClick}
              ></div>
              <div className="diaryItemManage">
                <div
                  className={styles.boxManage}
                  style={{ backgroundColor: diary.colors[entry.value] }}
                ></div>
                <p className={styles.diaryDesc}>
                  <span></span>
                  {entry.desc}
                </p>
                <button
                  onClick={this.handlePixelClose}
                  className={styles.itemManageClose}
                >
                  X
                </button>
              </div>
            </>
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
