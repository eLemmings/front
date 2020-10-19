import React from "react";
import Button from "../Button/Button";
import styles from "./TopBar.module.scss";
import Menu from "../Menu/Menu";

const TopBar = ({ handleChangeFn, title, options }) => {
  return (
    <div className={styles.wrapper}>
      <Menu options={options} />
      <div className={styles.center}>
        <Button handleFn={handleChangeFn}>&lt;</Button>
        <p>{title}</p>
        <Button handleFn={() => handleChangeFn("next")}>&gt;</Button>
      </div>
    </div>
  );
};

export default TopBar;
