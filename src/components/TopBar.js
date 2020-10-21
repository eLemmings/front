import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  arrow: {
    fontSize: "1.5rem",
  },
}));

const TopBar = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container xs={2}></Grid>
      <Grid container alignItems="center" justify="space-around" xs={8}>
        <Grid item>
          <Button
            onClick={() => props.handleChangeFn(1)}
            className={classes.arrow}
          >
            &lt;
          </Button>
        </Grid>
        <Grid item m={6}>
          <Typography variant="h5" component="h1">
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => props.handleChangeFn(-1)}
            className={classes.arrow}
          >
            &gt;
          </Button>
        </Grid>
      </Grid>
      <Grid container xs={2}></Grid>
    </div>
  );
};

export default TopBar;
