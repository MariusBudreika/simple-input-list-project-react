import React from "react";
// import UserItem from "../UserItem/UserItem";
// import styles from "./UserList.module.scss";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.items.map((item, key) => (
          <div key={key}>
            {item.name} ({item.age} years old)
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
