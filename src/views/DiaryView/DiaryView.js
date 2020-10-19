import React from "react";
import styles from "./DiaryView.module.scss";
import DiaryGrid from "../../components/DiaryGrid/DiaryGrid";
import retrievedDiaries from "../../data/diariesData";
import { Slider } from "@material-ui/core";
import TopBar from "../../components/TopBar/TopBar";

class DiaryView extends React.Component {
  state = {
    diaries: [...retrievedDiaries], // Retrieved from database
    activeDiary: 0,
    sliderValue: 4,
  };

  // getData = async () => {
  //   const url = "http://localhost:8887/diariesData.json";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  // };

  handleSliderChange = (e, value) => {
    // Handle and pass only value change
    this.setState(() => ({
      sliderValue: value,
    }));
  };

  changeDiary = (direction) => {
    if (direction === "next") {
      if (this.state.activeDiary + 1 !== this.state.diaries.length)
        this.setState((prevState) => ({
          activeDiary: prevState.activeDiary + 1,
        }));
    } else {
      if (this.state.activeDiary - 1 >= 0) {
        this.setState((prevState) => ({
          activeDiary: prevState.activeDiary - 1,
        }));
      }
    }
  };

  addDiary = () => {
    console.log("adding diary");
  };

  viewDiaries = () => {
    console.log("viewing diaries");
  };

  render() {
    const diary = this.state.diaries[this.state.activeDiary];
    const topBarOptions = {
      addDiary: { fn: this.addDiary, title: "Dodaj dziennik" },
      viewDiaries: { fn: this.viewDiaries, title: "Zobacz dzienniki" },
      logOut: { fn: undefined, title: "Wyloguj" },
    };

    return (
      <div className={styles.wrapper} key={diary.name}>
        <TopBar
          handleChangeFn={this.changeDiary}
          title={diary.name}
          options={topBarOptions}
        />
        <hr className={styles.guideline}></hr>
        <DiaryGrid diary={diary} sliderValue={this.state.sliderValue} />
        <div className={styles.sliderWrapper}>
          <Slider
            defaultValue={this.state.sliderValue}
            aria-labelledby="discrete-slider"
            step={1}
            min={2}
            max={10}
            onChange={this.handleSliderChange}
          />
        </div>
      </div>
    );
  }
}

export default DiaryView;
