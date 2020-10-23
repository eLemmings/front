import React from "react";
import styles from "./scss/DiaryView.module.scss";
import DiaryGrid from "../components/DiaryGrid";
import retrievedDiaries from "../data/diariesData";
import TopBar from "../components/TopBar";
import PixelEditMenu from "../components/PixelEditMenu";
import PixelAddMenu from "../components/PixelAddMenu";
import MenuItem from "../components/MenuItem";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { API } from "../API";
// import { getCookie, setCookie } from "../API";
import Slider from "../components/Slider";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Menu from "../components/Menu";
import Form from "../components/Form";

class DiaryView extends React.Component {
  constructor(props) {
    super(props);
    this.api = new API();
    this.pullUserData();
  }

  state = {
    diaries: retrievedDiaries,
    activeDiary: 0,
    activeEntry: 0,
    pixelEditOpened: false,
    pixelAddOpened: false,
    sliderValue: 12,
    isAddDiaryFormActive: true,
  };

  handleSliderChange = (e, value) => {
    this.setState({ sliderValue: value });
  };

  setPixelEdit = (e, v, index) => {
    this.setState({ activeEntry: index });
    this.setState({ pixelEditOpened: v });
  };

  setPixelAdd = (e, v) => {
    this.setState({ pixelAddOpened: v });
  };

  changeDiary = (v) => {
    if (
      0 <= this.state.activeDiary + v &&
      this.state.activeDiary + v < this.state.diaries.length
    )
      this.setState({ activeDiary: this.state.activeDiary + v });
  };

  activeEntryColorIndex = () => {
    const diary = this.state.diaries[this.state.activeDiary];
    const color = diary.colors[diary.entries[this.state.activeEntry].value];
    return diary.colors.indexOf(color);
  };

  toggleMenu = () => {
    this.setState((prevstate) => ({ isMenuActive: !prevstate.isMenuActive }));
  };

  pullUserData = () => {
    this.api
      .getUserData()
      .then((data) => {
        this.setState({ diaries: data.diaries });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addEntry = (entry) => {
    this.state.diaries[this.state.activeDiary].entries.push(entry);
  };

  addDiary = (e) => {
    e.preventDefault();
  };

  updateEntry = (entry) => {
    let entries = this.state.diaries[this.state.activeDiary].entries;
    entries[this.state.activeEntry] = entry;
    // this.setState((prevState) => ({
    //   diaries: {
    //     ...prevState.diaries,
    //     entries: entries,
    //   },
    // }));
    // console.log(this.state.diaries);
  };

  render() {
    return this.renderAccess();
  }

  renderNoAccess() {
    return <div>no access</div>;
  }

  renderAccess() {
    const diary = this.state.diaries[this.state.activeDiary];

    return (
      <div className={styles.wrapper}>
        <TopBar
          handleChangeFn={this.changeDiary}
          diaries={this.state.diaries}
        />
        <Divider />
        <DiaryGrid
          diary={diary}
          pixelSize={this.state.sliderValue}
          handleOpenPixelAdd={(e) => {
            this.setPixelAdd(e, true);
          }}
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

            <IconButton
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                this.toggleMenu();
                this.setState((prevState) => ({
                  isAddDiaryFormActive: !prevState.isAddDiaryFormActive,
                }));
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              active={this.state.isMenuActive}
              menuItems={
                this.state.isAddDiaryFormActive
                  ? [
                      <MenuItem
                        key={0}
                        item={
                          <Form
                            submitFn={(e) => {
                              this.addDiary(e);
                              this.toggleMenu();
                            }}
                          />
                        }
                      />,
                    ]
                  : [
                      <MenuItem
                        key={0}
                        item={
                          <Button
                            variant="text"
                            fullWidth
                            color="primary"
                            onClick={() => {
                              this.setState((prevState) => ({
                                isAddDiaryFormActive: !prevState.isAddDiaryFormActive,
                              }));
                            }}
                          >
                            Dodaj dziennik
                          </Button>
                        }
                      />,
                      <MenuItem
                        key={1}
                        item={
                          <Button fullWidth variant="text" color="primary">
                            Wyloguj się
                          </Button>
                        }
                      />,
                    ]
              }
            />
          </Toolbar>
        </AppBar>
        {this.state.pixelEditOpened && (
          <PixelEditMenu
            updateEntry={this.updateEntry}
            colorIndex={this.activeEntryColorIndex()}
            entry={diary.entries[this.state.activeEntry]}
            active={this.state.pixelEditOpened === "undefined" ? false : true}
            handleClose={(e) => {
              this.setPixelEdit(e, false, this.state.activeEntry);
            }}
            range={{ max: diary.max, min: diary.min }}
            colors={diary.colors}
          ></PixelEditMenu>
        )}
        {this.state.pixelAddOpened && (
          <PixelAddMenu
            handleClose={(e) => {
              this.setPixelAdd(e, false);
            }}
            active={this.state.pixelAddOpened === "undefined" ? false : true}
            addEntry={this.addEntry}
            diary={diary}
          ></PixelAddMenu>
        )}
      </div>
    );
  }
}

export default DiaryView;
