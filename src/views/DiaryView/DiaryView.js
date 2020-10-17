import React from "react";
import Menu from "../../components/Menu/Menu";
import { Grid } from "@material-ui/core";
import styles from "./DiaryView.module.scss";
import DiaryGrid from "../../components/DiaryGrid/DiaryGrid";
import retrievedDiaries from "../../data/diariesData";

class DiaryView extends React.Component {
  state = {
    diaries: [...retrievedDiaries], // Retrieved from database
    activeDiary: 0,
  };

  // getData = async () => {
  //   const url = "http://localhost:8887/diariesData.json";
  //   const response = await fetch(url);
  //   const data = await response.json();

  //   console.log(data);
  // };

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

  render() {
    const diary = this.state.diaries[this.state.activeDiary];
    return (
      <div className={styles.wrapper} key={diary.name}>
        <Grid container>
          <Grid item xs={1}>
            <Menu />
          </Grid>
          <Grid item xs={9}>
            <div className={styles.diaryLabel}>
              <p className={styles.diaryLabel__content}>{diary.name}</p>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className={styles.center}>
              <button onClick={() => this.changeDiary("prev")}>&lt;</button>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className={styles.center}>
              <button onClick={() => this.changeDiary("next")}>&gt;</button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.guideline}></hr>
          </Grid>
          <Grid item xs={12}>
            <DiaryGrid diary={diary} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DiaryView;
