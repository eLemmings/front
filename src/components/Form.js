import React from "react";
import Input from "@material-ui/core/Input";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

class Form extends React.Component {
  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={this.props.submitFn}>
        <Input
          placeholder="Nazwa dziennika"
          inputProps={{ "aria-label": "description" }}
          maxLength={50}
        />
        <Slider
          defaultValue={1}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={1}
          max={6}
          valueLabelDisplay="auto"
        />
        <Button variant="contained" color="primary" type="submit">
          Dodaj dziennik
        </Button>
      </form>
    );
  }
}

export default Form;
