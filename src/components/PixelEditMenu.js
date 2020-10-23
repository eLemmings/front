import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class PixelEditMenu extends React.Component {
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
          <DialogContent></DialogContent>
          <DialogContent></DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Wyjdź
          </Button>
          <Button color="primary" onClick={this.props.handleClose}>
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default PixelEditMenu;
