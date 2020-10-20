import React from "react";
import styles from "./scss/Button.module.scss";

const Button = ({ children, handleFn, size = "sm" }) => {
  return (
    <button
      className={`${styles.button} ${styles["button-".concat(size)]}`}
      onClick={handleFn}
    >
      {children}
    </button>
  );
};

export default Button;
