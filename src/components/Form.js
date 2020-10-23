import React from "react";
import Input from "@material-ui/core/Input";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

class Form extends React.Component {
  state = {
    diary: {
      name: "",
      range: 1,
      color: 50,
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
            <CancelRoundedIcon fontSize="large" />
          </Button>
        </Box>

        <Input
          placeholder="Nazwa dziennika"
          inputProps={{ "aria-label": "description" }}
          fullWidth
          onChange={(e) => {
            const { value } = e.target;
            this.setState({ diary: { name: value } });
          }}
        />
        <Box mt={5} mb={3}>
          <Typography
            id="discrete-slider-small-steps"
            color="primary"
            style={{
              color: "#ffffff",
            }}
          >
            zakres wartości
          </Typography>
          <Slider
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            min={1}
            max={100}
            valueLabelDisplay="auto"
            onChange={(e, v) => {
              this.setState({
                diary: { range: v },
              });
            }}
          />
        </Box>

        <Box mt={5} mb={3}>
          <Typography
            id="discrete-slider-small-steps"
            color="primary"
            style={{
              color: "#ffffff",
            }}
          >
            kolor bazowy
          </Typography>
          <Slider
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            min={1}
            max={360}
            onChange={(e, v) => {
              this.setState({
                diary: { color: v },
              });
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
              backgroundColor: `hsl(${this.state.diary.color},100%, 50%)`,
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
          Dodaj dziennik
        </Button>
      </form>
    );
  }
}

export default Form;
