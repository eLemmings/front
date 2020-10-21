import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  arrow: {
    fontSize: "2rem",
  },
  wrapper: {
    width: "60%",
    margin: "0 auto",
    position: "relative",
  },
}));

const TopBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Menu menuItems={props.menuItems} />
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Button
            onClick={() => props.handleChangeFn(1)}
            className={classes.arrow}
          >
            &lt;
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1">
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
    </div>
  );
};

export default TopBar;
