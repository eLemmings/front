import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Box, Input } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const useStyles = makeStyles((theme) => ({
  arrow: {
    fontSize: "1rem",
  },
  white: {
    padding: "10px",
    backgroundColor: "#3F51B5",
    position: "relative",
    zIndex: 15,
  },
  formControl: {
    width: "100%",
    "& label span": {
      color: "red",
    },
  },
}));

const TopBar = (props) => {
  const classes = useStyles();

  return (
    <Container fixed>
      <Box position="fixed" zIndex="15" left="0" right="0">
        <div className={classes.white}>
          <div className={classes.wrapper}>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <ArrowBackRoundedIcon
                  style={{ color: "#ffffff" }}
                  onClick={() => props.handleChangeFn(-1)}
                />
              </Grid>
              <Grid>
                <FormControl className={classes.formControl}>
                  <Select
                    style={{ color: "#ffffff" }}
                    defaultValue={0}
                    input={<Input name="circle" id="circle" />}
                  >
                    {props.diaries.map((diary, index) => (
                      <MenuItem key={index} value={index}>
                        {diary.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <ArrowForwardRoundedIcon
                  style={{ color: "#ffffff" }}
                  onClick={() => props.handleChangeFn(1)}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default TopBar;
