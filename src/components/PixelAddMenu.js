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

class PixelAddMenu extends React.Component {
  state = {
    entry: {
      value: 1,
      description: "",
    },
  };

  render() {
    console.log(this.props);
    return (
      <Dialog
        open={this.props.active}
        TransitionComponent={Transition}
        onClose={this.props.handleClose}
        keepMounted
      >
        <DialogTitle>Dodaj wpis do dziennika</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Wartość:
            {typeof this.state.entry.value === "number"
              ? `${(
                  ((this.state.entry.value - 1) / (this.props.diary.max - 1)) *
                  100
                ).toFixed(0)}%`
              : "0%"}
          </DialogContentText>
          <DialogContent>
            <Slider
              step={1}
              min={1}
              max={this.props.diary.max}
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
              style={{
                padding: "20px",
                backgroundColor: hexToRgba(
                  this.props.diary.color,
                  this.state.entry.value / this.props.diary.max
                ),
              }}
            ></Box>
          </DialogContent>
          <TextField
            label="Opis"
            multiline
            rows={4}
            onChange={(e) => {
              const { value } = e.target;
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
              console.log(this.state.entry);
              this.props.addEntry(this.state.entry);
              this.props.handleClose();
            }}
          >
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default PixelAddMenu;
