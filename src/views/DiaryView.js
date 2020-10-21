import React from "react";
import styles from "./scss/DiaryView.module.scss";
import DiaryGrid from "../components/DiaryGrid";
import retrievedDiaries from "../data/diariesData";
import { Slider } from "@material-ui/core";
import TopBar from "../components/TopBar";
import PixelEditMenu from "../components/PixelEditMenu";
import PixelAddMenu from "../components/PixelAddMenu";
import MenuItem from "../components/MenuItem";
import Button from "../components/Button";

class DiaryView extends React.Component {
	state = {
		diaries: retrievedDiaries,
		activeDiary: 0,
		activeEntry: 0,
		pixelEditOpened: false,
		pixelAddOpened: false,
		sliderValue: 4,
	};

	handleSliderChange = (e, value) => {
		this.setState({ sliderValue: value });
	};

	setPixelEdit = (e, v, index) => {
		this.setState({ activeEntry: index });
		this.setState({ pixelEditOpened: v });
	}

	setPixelAdd = (e, v) => {
		this.setState({ pixelAddOpened: v });
	}

	addPixel = (p) => {
		var st = this.state;
		st.diaries[this.state.activeDiary].entries.push({value: 2, description: 'xxx'});
		this.setState(st);
	}

	changeDiary = (v) => {
		if (0 <= this.state.activeDiary + v &&
			this.state.activeDiary + v < this.state.diaries.length)
			this.setState({ activeDiary: this.state.activeDiary + v });
	};

	activeEntryColor = () => {
		let diary = this.state.diaries[this.state.activeDiary];
		return diary.colors[diary.entries[this.state.activeEntry].value-1];
	}

	render() {
		const diary = this.state.diaries[this.state.activeDiary];
		return (
			<div className={styles.wrapper}>
				<TopBar
					handleChangeFn={this.changeDiary}
					title={diary.name}
					menuItems={[
						<MenuItem item={<Button>Wyloguj się</Button>}/>,
						<MenuItem item={<Button>Usuń konto</Button>}/>,
					]}
				/>
				<DiaryGrid
					diary={diary}
					pixelSize={this.state.sliderValue}
					handleOpenPixelAdd={(e) => {this.setPixelAdd(e, true)}}
					handleOpenPixelEdit={(e, index) => {this.setPixelEdit(e, true, index)}}
				/>
				<div className={styles.sliderWrapper}>
					<Slider
						defaultValue={this.state.sliderValue}
						aria-labelledby="discrete-slider"
						step={1}
						min={2}
						max={10}
						onChange={this.handleSliderChange}
					/>
				</div>
				{this.state.pixelEditOpened && 
					<PixelEditMenu
						handleMenuClose={(e) => {this.setPixelEdit(e, false, this.state.activeEntry)}}
						color={this.activeEntryColor()}
						entry={diary.entries[this.state.activeEntry]}
					></PixelEditMenu>
				}
				{this.state.pixelAddOpened && 
					<PixelAddMenu
						handleMenuClose={(e) => {this.setPixelAdd(e, false)}}
					></PixelAddMenu>
				}
			</div>
		);
	}
}

export default DiaryView;