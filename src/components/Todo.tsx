import useCreateContract from "../hooks/useCreateContract";
import { useAppDipatch, useAppSelector } from "../redux/config/hooks";
import { editTodoToggle } from "../redux/slices/todoSlice";
import { deleteTodo } from "../utils/helperFunctions";
import styles from "../styles/TodoListItem.module.css";
import { ReactComponent as Delete } from "../assets/delete.svg";
import { ReactComponent as Pencil } from "../assets/pencil.svg";

function Todo({ listId, todo }: { listId: string; todo: any }) {
  const dispatch = useAppDipatch();
  const { contract } = useCreateContract();
  const editTodoId = useAppSelector((state) => state.todo.todoToEdit);

  const removeTodo = () => {
    if (contract == null) return;

    deleteTodo(contract, todo.id, listId).then((res) => {
      console.log(res);
    });
  };

  if (contract == null) return <h1>Loading...</h1>;

  return (
    <div className={styles.createTodoContainer}>
      {editTodoId.listId === listId && editTodoId.todo.id === todo.id && (
        <div className={styles.pipe}></div>
      )}
      <div className={styles.createTodoFirstRow}>
        <div className={styles.delIcon} onClick={removeTodo}>
          <Delete />
        </div>
        <p style={{ color: "#FFFFFF" }} className={styles.createTodoInputTitle}>
          {todo.title}
        </p>
        <div
          className={styles.addIcon}
          onClick={() =>
            dispatch(
              editTodoToggle({
                listId,
                todo: {
                  id: todo.id,
                  title: todo.title,
                  description: todo.description,
                  isDone: todo.isDone,
                },
              })
            )
          }
        >
          <Pencil width={"10"} height={"10"} />
        </div>
      </div>
      <p className={styles.createTodoInputDesc}>{todo.description} </p>

      {/* <p>Done - {todo.isDone ? "Yes" : "No"}</p> */}
    </div>
  );
}

export default Todo;
