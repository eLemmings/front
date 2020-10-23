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

class PixelAddMenu extends React.Component {
  state = {
    entry: {
      value: 0,
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
          <DialogContentText>Wartość: </DialogContentText>
          <DialogContent>
            <Slider
              step={1}
              min={this.props.diary.min - 1}
              max={this.props.diary.max - 1}
              value={this.state.entry.value}
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
              style={{
                padding: "20px",
                backgroundColor: this.props.diary.colors[
                  this.state.entry.value
                ],
              }}
            />
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
