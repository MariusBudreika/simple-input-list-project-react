import React, { useState } from "react";
import NewUser from "./components/UserInput/NewUser";
import styles from "./App.module.scss";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (item) => {
    setUsers((prevItems) => {
      return [item, ...prevItems];
    });
  };

  return (
    <div>
      <section className={styles.center}>
        <NewUser onAddUser={addUserHandler} />
      </section>
      <section className={styles.center}>
        <UserList items={users} />
      </section>
    </div>
  );
}

export default App;
