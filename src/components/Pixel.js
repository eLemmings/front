import React from "react";
import styles from "./scss/Pixel.module.scss";
import addIcon from "../assets/add.svg";

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

class Pixel extends React.Component {
  state = {
    open: false,
  };

  calcFlexBasis = () => {
    return `calc(${100 / (17 - this.props.pixelSize)}% - 6px)`;
  };

  renderPixel = () => {
    let c = hexToRgb(this.props.color);
    return (
      <div
        className={styles.pixel}
        style={{
          backgroundColor:
            "rgba(" +
            c.r +
            "," +
            c.g +
            "," +
            c.b +
            "," +
            this.props.entry.value / this.props.max +
            ")",
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
