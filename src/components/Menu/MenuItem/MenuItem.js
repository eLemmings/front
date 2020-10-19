import React from "react";
import Button from "../../Button/Button";
import styles from "./MenuItem.module.scss";
import Form from "../../Form/Form";

const MenuItem = ({ option, active }) => {
  return (
    <li className={styles.item}>
      {active ? (
        <Form option={option} />
      ) : (
        <Button handleFn={option.fn}>{option.title}</Button>
      )}
    </li>
  );
};

export default MenuItem;
