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
    activeMenuItem: false,
  };

  addDiary = (e) => {
    if (e) {
      e.preventDefault();
      this.setState({
        activeMenuItem: this.topBarOptions.addDiary,
      });

      if (e.target[0]) {
        const diary = {
          name: "",
          colors: ["#ff0000", "#00ff00", "#098ab3", "#ae4582", "#975bca"],
          max: 0,
          entries: [
            [
              {
                value: 1,
                description: "Nie zjadłem śniadania",
              },
              {
                value: 2,
                description: "Uciekłem z ostatniej lekcji",
              },
              {
                value: 5,
                description: "Pomogłem Mamie zrobić obiad",
              },
              {
                value: 1,
                description: "Przed snem bolała mnie głowa",
              },
            ],
          ],
        };

        diary.name = e.target[0].value;
        diary.max = e.target[2].value;

        this.setState((prevState) => ({
          activeMenuItem: false,
          diaries: [...prevState.diaries, diary],
          activeDiary: this.state.diaries.length,
        }));
      }
    } else {
      this.setState((prevState) => ({
        activeMenuItem: false,
      }));
    }
  };

  viewDiaries = () => {
    this.setState({
      activeMenuItem: this.topBarOptions.viewDiaries,
    });
  };

  topBarOptions = {
    addDiary: { fn: this.addDiary, title: "Dodaj dziennik" },
    logOut: { fn: undefined, title: "Wyloguj" },
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
    // Change diary from next to previous with arrows
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

  render() {
    const diary = this.state.diaries[this.state.activeDiary];

    return (
      <div className={styles.wrapper} key={diary.name}>
        <TopBar
          activeItem={this.state.activeMenuItem}
          handleChangeFn={this.changeDiary}
          title={diary.name}
          options={this.topBarOptions}
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
