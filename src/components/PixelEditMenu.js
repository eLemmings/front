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

class PixelEditMenu extends React.Component {
  state = {
    entry: {
      value: this.props.colorIndex,
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
          <DialogContentText>Wartość: </DialogContentText>
          <DialogContent>
            <Slider
              step={1}
              value={this.state.entry.value}
              min={this.props.range.min - 2}
              max={this.props.range.max - 1}
              marks
              onChange={(e, v) => {
                this.setState((prevState) => ({
                  entry: { ...prevState.entry, value: v },
                }));
              }}
            />
          </DialogContent>
          <DialogContent>
            <Box
              boxShadow={2}
              display="flex"
              p={this.state.entry.value < 0 ? 2 : 3}
              justifyContent="center"
              alignItems="center"
              style={
                {
                  // backgroundColor: this.props.colors[this.state.entry.value],
                }
              }
            >
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
