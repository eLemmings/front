import React from "react";
import {
  Container,
  Box,
  Input,
  Grid,
  makeStyles,
  MenuItem,
  FormControl,
  Select,
  IconButton,
} from "@material-ui/core";
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
                <IconButton onClick={() => props.handleChangeFn(-1)}>
                  <ArrowBackRoundedIcon style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
              <Grid>
                <FormControl className={classes.formControl}>
                  <Select
                    style={{ color: "#ffffff" }}
                    value={props.activeDiary}
                    input={<Input name="circle" id="circle" />}
                  >
                    {props.diaries.map((diary, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={index}
                          onClick={() => props.chooseDiary(index)}
                        >
                          {diary.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <IconButton onClick={() => props.handleChangeFn(1)}>
                  <ArrowForwardRoundedIcon style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default TopBar;
