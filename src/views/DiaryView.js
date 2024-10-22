import React from "react";
import DiaryGrid from "../components/DiaryGrid";
import TopBar from "../components/TopBar";
import PixelEditMenu from "../components/PixelEditMenu";
import PixelAddMenu from "../components/PixelAddMenu";
import MenuItem from "../components/MenuItem";
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import Form from "../components/Form";
import MenuIcon from "@material-ui/icons/Menu";
import { API, getCookie, setCookie } from "../API";
import {
  Snackbar,
  AppBar,
  IconButton,
  Toolbar,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";

class DiaryView extends React.Component {
  constructor(props) {
    super(props);
    this.api = new API();
    this.pullUserData();
  }

  state = {
    diaries: [false],
    activeDiary: 0,
    activeEntry: 0,
    pixelEditOpened: false,
    pixelAddOpened: false,
    sliderValue: 9,
    isAddDiaryFormActive: false,
    isEditDiaryActive: true,
    snackbarContent: "",
    snackbarActive: false,
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
    const color = diary.color[diary.entries[this.state.activeEntry].value];
    return diary.color.indexOf(color);
  };

  toggleMenu = () => {
    this.setState((prevstate) => ({
      isMenuActive: !prevstate.isMenuActive,
    }));
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
    this.api.updateUserData({ diaries: this.state.diaries });
  };

  addEditDiary = (e, diary) => {
    e.preventDefault();
    diary.name =
      diary.name === ""
        ? `dziennik${this.state.diaries.length + 1}`
        : diary.name;
    if (this.state.isEditDiaryActive) {
      // Jezeli jest edytowany
      let diariesCopy = this.state.diaries;
      if (diary.max !== diariesCopy[this.state.activeDiary].max) {
        diariesCopy[this.state.activeDiary].entries.map((entry, index) => {
          if (entry.value > diary.max)
            diariesCopy[this.state.activeDiary].entries[index].value =
              diary.max;
          return 1;
        });
      }

      diariesCopy[this.state.activeDiary].name = diary.name;
      diariesCopy[this.state.activeDiary].color = diary.color;
      diariesCopy[this.state.activeDiary].max = diary.max;
      this.setState({ diaries: diariesCopy, isEditDiaryActive: false }, () => {
        this.api.updateUserData({ diaries: this.state.diaries });
      });
    } else {
      // Jezeli jest dodawany
      this.setState(
        (prevState) => ({
          diaries: [...prevState.diaries, diary],
          activeDiary: this.state.diaries.length,
        }),
        () => {
          this.api.updateUserData({ diaries: this.state.diaries });
        }
      );
    }
  };

  updateEntry = (entry) => {
    let entries = this.state.diaries[this.state.activeDiary].entries;
    entries[this.state.activeEntry] = entry;
    this.api.updateUserData({ diaries: this.state.diaries });
  };

  toggleAddDiaryForm = () => {
    if (this.state.isEditDiaryActive) {
      this.setState((prevState) => ({
        isAddDiaryFormActive: !prevState.isAddDiaryFormActive,
        isEditDiaryActive: false,
      }));
    } else
      this.setState((prevState) => ({
        isAddDiaryFormActive: !prevState.isAddDiaryFormActive,
      }));
  };

  chooseDiary = (index) => {
    this.setState({ activeDiary: index });
  };

  snackbarToggle = (isActive) => {
    this.setState({ snackbarActive: isActive });
  };

  render() {
    if (getCookie("token") !== "") return this.renderAccess();
    return this.renderNoAccess();
  }

  renderNoAccess() {
    this.props.history.push("/");
    return <div>no accesss</div>;
  }

  renderAccess() {
    if (!this.state.diaries[this.state.activeDiary])
      return (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "inherit",
          }}
        >
          <CircularProgress></CircularProgress>
        </div>
      );
    else
      return (
        <div>
          <Snackbar
            open={this.state.snackbarActive}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={6000}
            onClose={() => this.snackbarToggle(false)}
            message={<div>{this.state.snackbarContent}</div>}
          ></Snackbar>
          <TopBar
            handleChangeFn={this.changeDiary}
            diaries={this.state.diaries}
            chooseDiary={this.chooseDiary}
            activeDiary={this.state.activeDiary}
          />
          <Divider />
          <DiaryGrid
            diary={this.state.diaries[this.state.activeDiary]}
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
                onClick={this.toggleMenu}
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
                              submitFn={this.addEditDiary}
                              toggleMenuFn={this.toggleMenu}
                              toggleAddDiaryFormFn={this.toggleAddDiaryForm}
                              edit={this.state.isEditDiaryActive ? true : false}
                              diary={this.state.diaries[this.state.activeDiary]}
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
                              onClick={this.toggleAddDiaryForm}
                              style={{
                                color: "#ffffff",
                              }}
                            >
                              Dodaj dziennik
                            </Button>
                          }
                        />,
                        <MenuItem
                          key={1}
                          item={
                            <Button
                              variant="text"
                              fullWidth
                              color="primary"
                              onClick={() => {
                                this.toggleAddDiaryForm();
                                this.setState({ isEditDiaryActive: true });
                              }}
                              style={{
                                color: "#ffffff",
                              }}
                            >
                              Edytuj ten dziennik
                            </Button>
                          }
                        />,
                        <MenuItem
                          key={2}
                          item={
                            <Button
                              variant="text"
                              fullWidth
                              color="primary"
                              onClick={() => {
                                if (this.state.diaries.length > 1) {
                                  const diariesCopy = [...this.state.diaries];
                                  diariesCopy.splice(this.state.activeDiary, 1);
                                  this.setState(
                                    { diaries: diariesCopy },
                                    () => {
                                      this.setState({ activeDiary: 0 });
                                    }
                                  );
                                  this.toggleMenu();
                                } else {
                                  this.setState({
                                    snackbarActive: true,
                                    snackbarContent:
                                      "Nie można usunać ostatniego dziennika!",
                                  });
                                }
                              }}
                              style={{
                                color: "#ffffff",
                              }}
                            >
                              Usuń ten dziennik
                            </Button>
                          }
                        />,
                        <MenuItem
                          key={3}
                          item={
                            <Button
                              variant="text"
                              fullWidth
                              color="primary"
                              onClick={() => {
                                this.api
                                  .createShare(this.state.activeDiary)
                                  .then((data) => {
                                    navigator.clipboard.writeText(
                                      window.location.origin +
                                        "/share/" +
                                        data.code
                                    );
                                  });
                                this.setState({
                                  snackbarActive: true,
                                  snackbarContent: "Link skopiowano do schowka",
                                });
                              }}
                              style={{
                                color: "#ffffff",
                              }}
                            >
                              Udostępnij ten dziennik
                            </Button>
                          }
                        />,
                        <MenuItem
                          key={4}
                          item={
                            <Button
                              fullWidth
                              variant="text"
                              color="primary"
                              onClick={() => {
                                setCookie("token", "");
                                window.location = window.location.origin;
                              }}
                              style={{
                                color: "#ffffff",
                              }}
                            >
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
              color={this.state.diaries[this.state.activeDiary].color}
              entry={
                this.state.diaries[this.state.activeDiary].entries[
                  this.state.activeEntry
                ]
              }
              active={this.state.pixelEditOpened === "undefined" ? false : true}
              handleClose={(e) => {
                this.setPixelEdit(e, false, this.state.activeEntry);
              }}
              maxValue={this.state.diaries[this.state.activeDiary].max}
            ></PixelEditMenu>
          )}
          {this.state.pixelAddOpened && (
            <PixelAddMenu
              handleClose={(e) => {
                this.setPixelAdd(e, false);
              }}
              active={this.state.pixelAddOpened === "undefined" ? false : true}
              addEntry={this.addEntry}
              diary={this.state.diaries[this.state.activeDiary]}
            ></PixelAddMenu>
          )}
        </div>
      );
  }
}

export default DiaryView;
