import React from "react";
import styles from "./scss/DiaryView.module.scss";
import DiaryGrid from "../components/DiaryGrid";
import retrievedDiaries from "../data/diariesData";
import { API } from "../API";
import Slider from "../components/Slider";
import PixelLookupMenu from "../components/PixelLookupMenu";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { Container, Box } from "@material-ui/core";

class ShareView extends React.Component {
	constructor(props) {
		super(props);
		this.api = new API();
		this.pullShare();
	}

	state = {
		diary: retrievedDiaries[0],
		name: "",
		sliderValue: 12,
		activeEntry: 0,
		pixelEditOpened: false,
	};

	handleSliderChange = (e, value) => {
		this.setState({ sliderValue: value });
	};

	pullShare = () => {
		this.api
			.getShare(this.props.match.params.code)
			.then((data) => {
				console.log(data);
				this.setState({
					diary: data,
					name: data.nick,
					id: data.id,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	setPixelEdit = (e, v, index) => {
		this.setState({ activeEntry: index });
		this.setState({ pixelEditOpened: v });
	};

	render() {
		return (
			<div className={styles.wrapper}>
				<Container fixed>
					<Box
						position="fixed"
						zIndex="15"
						left="0"
						top="0"
						right="0"
						width="100%"
					>
						<div
							style={{
								padding: "14px",
								backgroundColor: "#3F51B5",
								position: "relative",
								zIndex: 15,
								color: "#ffffff",
							}}
						>
							<div>
								<Grid
									container
									alignItems="center"
									justify="center"
								>
									<Grid item>Dziennik użytkownika: {this.state.name}#{this.state.id}</Grid>
								</Grid>
							</div>
						</div>
					</Box>
				</Container>
				<DiaryGrid
					shared={true}
					diary={this.state.diary}
					pixelSize={this.state.sliderValue}
					handleOpenPixelEdit={(e, index) => {
						this.setPixelEdit(e, true, index);
					}}
				/>
				<AppBar
					position="fixed"
					color="primary"
					style={{ bottom: "0", top: "auto" }}
				>
					<Toolbar>
						<Slider
							value={this.state.sliderValue}
							step={1}
							min={3}
							max={14}
							onChange={this.handleSliderChange}
							color="secondary"
						/>
					</Toolbar>
				</AppBar>
				{this.state.pixelEditOpened && (
					<PixelLookupMenu
						entry={this.state.diary.entries[this.state.activeEntry]}
						handleClose={(e) => {
							this.setPixelEdit(e, false, this.state.activeEntry);
						}}
						range={{
							max: this.state.diary.max,
							min: this.state.diary.min,
						}}
						color={this.state.diary.color}
					></PixelLookupMenu>
				)}
			</div>
		);
	}
}

export default ShareView;
