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

class PixelEditMenu extends React.Component {
  state = {
    entry: {
      value: this.props.entry.value,
      description: this.props.entry.description,
    },
  };

  render() {
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
            {this.state.entry.value}
          </DialogContentText>
          <DialogContent>
            <Slider
              step={1}
              min={1}
              max={this.props.maxValue}
              defaultValue={this.props.entry.value}
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
