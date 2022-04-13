import styles from "./UserItem.module.scss";

const UserItem = (props) => {
  <li className={styles.item}>{props.children}</li>;
};

export default UserItem;
