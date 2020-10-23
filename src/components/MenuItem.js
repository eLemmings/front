import React from "react";
import styles from "./scss/MenuItem.module.scss";

class MenuItem extends React.Component {
  render() {
    return <li className={styles.item}> {this.props.item} </li>;
  }
}

export default MenuItem;
