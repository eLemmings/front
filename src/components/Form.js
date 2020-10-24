import React from "react";
import Input from "@material-ui/core/Input";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CancelTwoToneIcon from "@material-ui/icons/HighlightOffRounded";

function HSLToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
}

class Form extends React.Component {
  state = {
    diary: {
      name: "",
      max: 2,
      color: HSLToHex(1, 100, 50),
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

        <Input
          placeholder="Nazwa dziennika"
          inputProps={{ "aria-label": "description" }}
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
            zakres wartości
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
            kolor bazowy
          </Typography>
          <Slider
            defaultValue={1}
            step={1}
            min={1}
            max={330}
            onChange={(e, v) => {
              this.setState((prevState) => ({
                diary: {
                  ...prevState.diary,
                  color: HSLToHex(v, 100, 50),
                },
              }));
            }}
          />
          <Box
            mt={2}
            boxShadow={2}
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
