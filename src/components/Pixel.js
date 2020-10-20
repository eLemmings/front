import React from "react";
import styles from "./scss/Pixel.module.scss";
import Button from "./Button";

class Pixel extends React.Component {
  state = {
    active: false,
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };

  editPixel = () => {};

  render() {
    return (
      <>
        <div
          className={styles.pixel}
          style={{
            backgroundColor: this.props.entry.color,
            flexBasis: `calc(${100 / this.props.pixelSize}% - 6px)`,
          }}
          onClick={this.handleToggle}
        ></div>
        <div
          className={this.state.active ? styles.editorActive : styles.editor}
        >
          <div
            className={styles.editorPixel}
            style={{ backgroundColor: this.props.entry.color }}
          ></div>
          <p className={styles.desc}>{this.props.entry.description}</p>
          <Button handleFn={this.handleToggle}>zamknij</Button>
        </div>
      </>
    );
  }
}

export default Pixel;