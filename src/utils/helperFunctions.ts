import { Contract } from "ethers";

export const getTodos = async (contract: Contract, address: string) => {
  let fn = await contract.getFunction("getTodos");
  return await fn(address);
};

export const addList = async (contract: Contract, list_id: string) => {
  let fn = await contract.getFunction("addList");
  return await fn(list_id);
};

export const addTodo = async (
  contract: Contract,
  list_id: string,
  title: string,
  description: string
) => {
  let fn = await contract.getFunction("addTodo");
  return await fn(list_id, title, description);
};

export const updateTodo = async (
  contract: Contract,
  todoId: string,
  list_id: string,
  title: string,
  description: string
) => {
  let fn = await contract.getFunction("updateTodo");
  return await fn(todoId, list_id, title, description);
};

export const removeList = async (contract: Contract, list_id: string) => {
  let fn = await contract.getFunction("removeList");
  return await fn(list_id);
};

export const deleteTodo = async (
  contract: Contract,
  todoId: string,
  list_id: string
) => {
  let fn = await contract.getFunction("deleteTodo");
  return await fn(todoId, list_id);
};
