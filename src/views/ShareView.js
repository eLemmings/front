import React from "react";
import DiaryGrid from "../components/DiaryGrid";
import retrievedDiaries from "../data/diariesData";
import Slider from "../components/Slider";
import PixelLookupMenu from "../components/PixelLookupMenu";
import {
  Container,
  Box,
  Toolbar,
  AppBar,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { API } from "../API";

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
    hasAccess: false,
  };

  handleSliderChange = (e, value) => {
    this.setState({ sliderValue: value });
  };

  pullShare = () => {
    this.api
      .getShare(this.props.match.params.code)
      .then((data) => {
        if (parseInt(String(data.code).charAt(0)) === 4) {
          this.props.history.push("/");
        } else {
          this.setState({
            diary: data,
            name: data.nick,
            id: data.id,
            hasAccess: true,
          });
        }
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
    if (!this.state.hasAccess) {
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
    } else
      return (
        <div>
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
                  <Grid container alignItems="center" justify="center">
                    <Grid
                      item
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Dziennik użytkownika: {this.state.name}#{this.state.id}
                    </Grid>
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
              maxValue={this.state.diary.max}
              color={this.state.diary.color}
            ></PixelLookupMenu>
          )}
        </div>
      );
  }
}

export default ShareView;
