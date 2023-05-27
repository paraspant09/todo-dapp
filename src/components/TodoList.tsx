import { useEffect, useRef, useState } from "react";
import useCreateContract from "../hooks/useCreateContract";
import { addList, getTodos } from "../utils/helperFunctions";
import { useAppSelector } from "../redux/config/hooks";
import TodoListItem from "./TodoListItem";
import { Contract } from "ethers";
import styles from "../styles/TodoList.module.css";
import { ReactComponent as Add } from "../assets/add.svg";

function TodoList() {
  const { contract } = useCreateContract();
  const address = useAppSelector((state) => state.blockchain.account);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (contract == null) return;

    getTodos(contract, address).then((res) => {
      setTodos(res);
    });
  }, [contract]);

  if (address === "" || contract == null) return <h1>Loading...</h1>;

  return (
    <div className={styles.todoList}>
      {todos.length > 0 &&
        todos.map((item, index) => {
          return (
            <div className={styles.item} key={"TodoList-" + index}>
              <TodoListItem list={item} />
            </div>
          );
        })}
      <div className={styles.item}>
        <CreateTodoListItem contract={contract} address={address} />
      </div>
    </div>
  );
}

const CreateTodoListItem = ({
  contract,
  address,
}: {
  contract: Contract;
  address: string;
}) => {
  const titleRef = useRef<any>(null);

  const addTodoListHandler = () => {
    if (titleRef.current == null || titleRef.current.value == "") return;

    addList(contract, `${address}-${titleRef.current.value}`).then((res) => {
      console.log("Todo List-->", res);
    });

    titleRef.current.value = "";
  };

  return (
    <div className={styles.createTodoListBox}>
      <input
        type="text"
        ref={titleRef}
        className={styles.createTodoListInputTitle}
        placeholder="Add Todo-List"
      />
      <div className={styles.addIcon} onClick={addTodoListHandler}>
        <Add />
      </div>
    </div>
  );
};

export default TodoList;
