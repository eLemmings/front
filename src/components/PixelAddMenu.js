import React from "react";
import {
  Box,
  TextField,
  Slide,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Dialog,
} from "@material-ui/core";
import Slider from "../components/Slider";
import { hexToRgba } from "../utils";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class PixelAddMenu extends React.Component {
  state = {
    entry: {
      value: 1,
      description: "",
    },
  };

  render() {
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
            {this.state.entry.value}
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
