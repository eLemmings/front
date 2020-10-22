import React from "react";
import styles from "./scss/Menu.module.scss";

const Menu = (props) => {
  console.log(props);
  return (
    <nav className={props.active ? styles.navActive : styles.nav}>
      <ul className={styles.list}>{props.menuItems.map((item) => item)}</ul>
    </nav>
  );
};

export default Menu;
