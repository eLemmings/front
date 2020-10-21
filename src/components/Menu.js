import React from "react";
import styles from "./scss/Menu.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Burger from "./Burger";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 15,
  },
}));

const Menu = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Burger />
      <nav className={styles.nav}>
        <ul className={styles.list}>{props.menuItems.map((item) => item)}</ul>
      </nav>
    </div>
  );
};

export default Menu;
