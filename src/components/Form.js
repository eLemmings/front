import React from "react";
import { TextField, Slider, Button, Box, Typography } from "@material-ui/core";
import CancelTwoToneIcon from "@material-ui/icons/HighlightOffRounded";
import { hslToHex, getHue } from "../utils";

class Form extends React.Component {
  state = {
    diary: {
      name: "",
      max: 2,
      color: this.props.edit ? this.props.diary.color : 1,
      entries: [],
    },
  };

  render() {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          this.props.toggleMenuFn();
          this.props.toggleAddDiaryFormFn();
          this.props.submitFn(e, this.state.diary);
        }}
      >
        <Box position="fixed" top="4%" left="4%">
          <Button
            variant="text"
            color="primary"
            type="submit"
            onClick={() => {
              this.props.toggleAddDiaryFormFn();
            }}
          >
            <CancelTwoToneIcon fontSize="large" />
          </Button>
        </Box>

        <TextField
          placeholder="Nazwa dziennika"
          inputProps={{
            maxLength: 20,
          }}
          defaultValue={this.props.edit ? this.props.diary.name : ""}
          fullWidth
          onChange={(e) => {
            const { value } = e.target;
            this.setState((prevState) => ({
              diary: { ...prevState.diary, name: value },
            }));
          }}
        />
        <Box mt={5}>
          <Typography
            color="primary"
            style={{
              color: "#ffffff",
            }}
          >
            Skala samopoczucia
          </Typography>
          <Slider
            defaultValue={this.props.edit ? this.props.diary.max : 1}
            step={1}
            min={2}
            max={100}
            valueLabelDisplay="auto"
            onChange={(e, v) => {
              this.setState((prevState) => ({
                diary: { ...prevState.diary, max: v },
              }));
            }}
          />
        </Box>

        <Box mt={3} mb={3}>
          <Typography
            color="primary"
            style={{
              color: "#ffffff",
            }}
          >
            Kolor dziennika
          </Typography>
          <Slider
            defaultValue={this.props.edit ? getHue(this.props.diary.color) : 1}
            step={1}
            min={1}
            max={330}
            onChange={(e, v) => {
              this.setState((prevState) => ({
                diary: {
                  ...prevState.diary,
                  color: hslToHex(v, 100, 50),
                },
              }));
            }}
          />
          <Box
            mt={2}
            boxShadow={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              padding: "20px",
              backgroundColor: this.state.diary.color,
            }}
          ></Box>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          style={{
            color: "#ffffff",
          }}
        >
          {this.props.edit ? "Edytuj dziennik" : "Dodaj dziennik"}
        </Button>
      </form>
    );
  }
}

export default Form;
