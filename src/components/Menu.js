import React from "react";
import styles from "./scss/Menu.module.scss";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
  state = {
    active: false,
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
    if (!this.state.active) {
      this.props.options.addDiary.fn();
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button
          className={
            this.state.active ? styles.burgerActive : styles.burgerWrapper
          }
          onClick={this.handleToggle}
        >
          <span className={styles.burgerBox}>
            <span className={styles.burgerInner}></span>
          </span>
        </button>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {this.props.activeItem ? (
              <MenuItem option={this.props.activeItem} active />
            ) : (
              Object.keys(this.props.options).map((option) => (
                <MenuItem option={this.props.options[option]} />
              ))
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
