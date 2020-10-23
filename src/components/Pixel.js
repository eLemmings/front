import React from "react";
import styles from "./scss/Pixel.module.scss";
import addIcon from "../assets/add.svg";

class Pixel extends React.Component {
  state = {
    open: false,
  };

  calcFlexBasis = () => {
    return `calc(${100 / (17 - this.props.pixelSize)}% - 6px)`;
  };

  renderPixel = () => {
    return (
      <div
        className={styles.pixel}
        style={{
          backgroundColor: this.props.color,
          flexBasis: this.calcFlexBasis(),
        }}
        onClick={(e) => {
          this.props.handleOpenPixelEdit(e, this.props.index);
        }}
      ></div>
    );
  };

  renderAddPixel = () => {
    return (
      <div
        className={styles.pixel}
        style={{ flexBasis: this.calcFlexBasis() }}
        onClick={(e) => {
          this.props.handleOpenPixelAdd(e, true);
        }}
      >
        <img src={addIcon} className={styles.addIcon} alt="" />
      </div>
    );
  };

  render() {
    return this.props.addPixel ? this.renderAddPixel() : this.renderPixel();
  }
}

export default Pixel;
