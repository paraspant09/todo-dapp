import { useState, useEffect } from "react";
import useCreateContract from "../hooks/useCreateContract";
import { useAppDipatch, useAppSelector } from "../redux/config/hooks";
import { saveTodo } from "../redux/slices/todoSlice";
import { updateTodo } from "../utils/helperFunctions";
import styles from "../styles/EditTodo.module.css";
import { ReactComponent as Back } from "../assets/back.svg";

function EditTodo() {
  const { contract } = useCreateContract();
  const { listId, todo } = useAppSelector((state) => state.todo.todoToEdit);
  const dispatch = useAppDipatch();
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const isDarkMode=useAppSelector(state => state.todo.isDarkMode);

  const editTodo = () => {
    if (
      contract == null ||
      title == "" ||
      description == "" ||
      (title === todo.title && description === todo.description)
    )
      return;

    dispatch(saveTodo());

    updateTodo(contract, todo.id, listId, title, description).then((res) => {
      console.log("Edit Todo-->", res);
    });
  };
  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
  }, [todo]);

  if (contract == null) return <h1>Loading...</h1>;

  return (
    <div style={!isDarkMode ? {backgroundColor:"lightgreen",color:"black"} : {}} className={styles.EditTodo}>
      <div className={styles.header}>
        <Back fill={!isDarkMode ? "black" : "white"} style={{ marginLeft: "24px" }} />
        <p>Edit Todo</p>
      </div>

      <div className={styles.editor}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.editTodoInputTitle}
          placeholder="Add Todo"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.editTodoInputDesc}
          placeholder="Add Todo Description"
          // cols={21}
          rows={5}
        />
        {/* <p>Done - {todo.isDone ? "Yes" : "No"}</p> */}
        <button className={styles.saveButton} onClick={editTodo}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditTodo;
