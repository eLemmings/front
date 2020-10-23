import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

class PixelLookupMenu extends React.Component {
	render() {
		return (
			<Dialog
				open={true}
				TransitionComponent={Transition}
				onClose={this.props.handleClose}
				keepMounted
			>
				<DialogTitle>Wpis</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Wartość: {this.props.entry.value}
					</DialogContentText>
					<DialogContent>
					</DialogContent>
					<TextField
						label={
							this.props.entry.value < 0
								? "Pusto tutaj :("
								: "Opis"
						}
						multiline
						rows={4}
						value={this.props.entry.description}
						disabled
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.props.handleClose} color="primary">
						Wyjdź
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default PixelLookupMenu;
