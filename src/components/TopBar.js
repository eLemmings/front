import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class TopBar extends React.Component {
  render() {
    return (
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Button color="secondary">&lt;</Button>
        </Grid>
        <Grid item m={6}>
          <p>{this.props.title}</p>
        </Grid>
        <Grid item>
          <Button color="secondary">&gt;</Button>
        </Grid>
      </Grid>
    );
  }
}

export default TopBar;
