import styles from "./doApp.module.css";


function NotaItem({ text, completed, onToggle }) {
  return (
    <li
      className={styles.noteItem}
      onClick={onToggle} 
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}

export default NotaItem;