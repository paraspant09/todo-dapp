import { useAppSelector } from "../redux/config/hooks";
import EditTodo from "./EditTodo";
import TodoList from "./TodoList";
import styles from "../styles/MainContent.module.css";

export const MainContent = () => {
  const { signer, account } = useAppSelector((state) => state.blockchain);
  const listId = useAppSelector((state) => state.todo.todoToEdit.listId);
  return (
    <div className={styles.mainContent}>
      <TodoList />
      {account != "" && signer != null && listId != "" && <EditTodo />}
    </div>
  );
};
