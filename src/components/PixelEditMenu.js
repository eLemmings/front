import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import Slider from "../components/Slider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function hexToRgba(hex, opacity) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      opacity +
      ")"
    );
  }
}

class PixelEditMenu extends React.Component {
  state = {
    entry: {
      value: this.props.colorIndex,
      description: this.props.entry.description,
    },
  };
  render() {
    console.log(this.props);
    return (
      <Dialog
        open={true}
        TransitionComponent={Transition}
        onClose={this.props.handleClose}
        keepMounted
      >
        <DialogTitle>Edytuj wpis</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Wartość:
            {typeof this.state.entry.value === "number"
              ? `${(
                  ((this.state.entry.value - 1) / (this.props.maxValue - 1)) *
                  100
                ).toFixed(0)}%`
              : "0%"}
          </DialogContentText>
          <DialogContent>
            <Slider
              step={1}
              min={1}
              max={this.props.maxValue}
              defaultValue={1}
              onChange={(e, v) => {
                this.setState((prevState) => ({
                  entry: { ...prevState.entry, value: v },
                }));
              }}
            />
          </DialogContent>
          <DialogContent>
            <Box
              boxShadow={3}
              display="flex"
              p={this.state.entry.value < 0 ? 2 : 3}
              justifyContent="center"
              alignItems="center"
              style={{
                backgroundColor: hexToRgba(
                  this.props.color,
                  this.state.entry.value / this.props.maxValue
                ),
              }}
            >
              {" "}
              <Box>{this.state.entry.value < 0 ? "BRAK" : ""}</Box>
            </Box>
          </DialogContent>
          <TextField
            label={this.state.entry.value < 0 ? "Pusto tutaj :(" : "Opis"}
            multiline
            rows={4}
            value={this.state.entry.description}
            InputProps={{
              disabled: this.state.entry.value < 0 ? true : undefined,
            }}
            onChange={(event) => {
              const { value } = event.target;
              this.setState((prevState) => ({
                entry: { ...prevState.entry, description: value },
              }));
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Wyjdź
          </Button>
          <Button
            color="primary"
            onClick={() => {
              this.props.updateEntry(this.state.entry);
              this.props.handleClose();
            }}
          >
            Edytuj
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default PixelEditMenu;
