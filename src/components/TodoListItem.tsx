import { useRef } from "react";
import Todo from "./Todo";
import { addTodo, removeList } from "../utils/helperFunctions";
import useCreateContract from "../hooks/useCreateContract";
import { ReactComponent as Delete } from "../assets/delete.svg";
import { ReactComponent as Add } from "../assets/add.svg";
import styles from "../styles/TodoListItem.module.css";

function TodoListItem({ list }: { list: any }) {
  
  return (
    <>
      <div className={styles.heading}>List : {list.id.split("-")[1]}</div>
      <CreateTodo listId={list.id} />
        {list.todos.length > 0 &&
          list.todos.map((item: any, index: number) => {
            return (
              <div key={"Todo-" + index}>
                <Todo listId={list.id} todo={item} />
              </div>
            );
          })}
    </>
  );
}

const CreateTodo = ({
  listId
}: {
  listId: string;
}) => {
  const titleRef = useRef<any>(null);
  const descriptionRef = useRef<any>(null);

  const { contract } = useCreateContract();
  
  const deleteList = () => {
    if (contract == null) return;

    removeList(contract, listId).then((res) => {
      console.log(res);
    });
  };

  const addTodoHandler = () => {
    if (
      contract == null ||
      titleRef.current == null ||
      titleRef.current.value == "" ||
      descriptionRef.current == null ||
      descriptionRef.current.value == ""
    )
      return;

    addTodo(
      contract,
      listId,
      titleRef.current.value,
      descriptionRef.current.value
    ).then((res) => {
      console.log("Todo List-->", res);
    });

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div className={styles.createTodoContainer}>
      <div className={styles.createTodoFirstRow}>
        <div className={styles.delIcon} onClick={deleteList}>
          <Delete />
        </div>
        <input
          className={styles.createTodoInputTitle}
          type="text"
          ref={titleRef}
          placeholder="Add Todo"
        />
        <div className={styles.addIcon} onClick={addTodoHandler}>
          <Add />
        </div>
      </div>
      <textarea
        className={styles.createTodoInputDesc}
        ref={descriptionRef}
        placeholder="Add Todo Description"
        cols={21}
        rows={2}
      />
    </div>
  );
};

export default TodoListItem;
