import React from "react";
import ReactDOM from "react-dom";
import styles from "./Pixel.module.scss";
import Button from "../Button/Button";

class Pixel extends React.Component {
  state = {
    active: false,
    eidt: false,
  };

  resize = () => {
    const node = ReactDOM.findDOMNode(this);
    if (node) {
      node.style.flexBasis = `calc(${100 / this.props.pixelSize}% - 6px)`;
    }
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };

  editPixel = () => {};

  render() {
    this.resize();

    return (
      <>
        <div
          className={styles.pixel}
          style={{ backgroundColor: this.props.entry.color }}
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
