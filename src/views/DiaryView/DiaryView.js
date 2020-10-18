import React from "react";
import Menu from "../../components/Menu/Menu";
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
    const titles = [];
    for (const title of this.state.diaries) {
      titles.push(title.name);
    }
    return (
      <div className={styles.wrapper} key={diary.name}>
        <div className={styles.topBar}>
          <Menu />
          <div className={styles.center}>
            <button
              className={styles.button}
              onClick={() => this.changeDiary("prev")}
            >
              &lt;
            </button>
            <p>{diary.name}</p>
            <button
              className={styles.button}
              onClick={() => this.changeDiary("next")}
            >
              &gt;
            </button>
          </div>
        </div>
        <hr className={styles.guideline}></hr>
        <DiaryGrid diary={diary} />
      </div>
    );
  }
}

export default DiaryView;
