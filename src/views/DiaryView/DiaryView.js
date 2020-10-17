import React from "react";
import Menu from "../../components/Menu/Menu";
import { Grid } from "@material-ui/core";
import styles from "./DiaryView.module.scss";
import DiaryGrid from "../../components/DiaryGrid/DiaryGrid";
import retrievedDiaries from "../../data/diariesData";

class DiaryView extends React.Component {
  state = {
    diaries: [...retrievedDiaries], // Retrieved from database
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Grid container>
          <Grid item xs={1}>
            <Menu />
          </Grid>
          <Grid item xs={11}>
            <div className={styles.diaryLabel}>
              <p className={styles.diaryLabel__content}>Samopoczucie</p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.guideline}></hr>
          </Grid>
          <Grid item xs={12}>
            <DiaryGrid />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DiaryView;
