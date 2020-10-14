import React from "react";
import styles from "./Menu.module.scss";

class Menu extends React.Component {
  state = {
    active: false,
  };

  toggleState = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };

  render() {
    return (
      <div>
        <button
          className={
            this.state.active ? styles.burgerActive : styles.burgerWrapper
          }
          onClick={this.toggleState}
        >
          <span className={styles.burgerBox}>
            <span className={styles.burgerInner}></span>
          </span>
        </button>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.link}>Add new record</button>
            </li>
            <li className={styles.item}>
              <button className={styles.link}>View diares</button>
            </li>
            <li className={styles.item}>
              <button className={styles.link}>Share diary</button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
