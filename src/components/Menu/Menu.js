import React from "react";
import styles from "./Menu.module.scss";
import Button from "../Button/Button";

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
            {Object.keys(this.props.options).map((option) => (
              <li className={styles.item}>
                <Button handleFn={this.props.options[option].fn}>
                  {this.props.options[option].title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
