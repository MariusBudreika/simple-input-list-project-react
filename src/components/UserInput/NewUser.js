import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../UI/Card";
import styles from "./NewUser.module.scss";

const User = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      age: enteredAge,
    };

    props.onAddUser(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.form}>
          <label className={styles.formLabel}>Name :</label>
          <input
            className={styles.formInput}
            type="text"
            onChange={nameChangeHandler}
            value={enteredName}
          ></input>
        </div>
        <div className={styles.form}>
          <label className={styles.formLabel}>Age :</label>
          <input
            className={styles.formInput}
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default User;
