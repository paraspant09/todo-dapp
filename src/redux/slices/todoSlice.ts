import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface TodoDataType {
  isDarkMode:boolean;
  todoToEdit: {
    listId: string;
    todo: {
      id: string;
      title: string;
      description: string;
      isDone: boolean;
    };
  };
}

const initialState: TodoDataType = {
  isDarkMode:true,
  todoToEdit: {
    listId: "",
    todo: {
      id: "",
      title: "",
      description: "",
      isDone: false,
    },
  },
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    editTodoToggle: (
      state: TodoDataType,
      action: PayloadAction<TodoDataType["todoToEdit"]>
    ) => {
      if (
        state.todoToEdit.listId == "" ||
        state.todoToEdit.listId !== action.payload.listId
      )
        state.todoToEdit = action.payload;
      else if (state.todoToEdit.todo.id !== action.payload.todo.id) {
        state.todoToEdit.todo = action.payload.todo;
      } else {
        state.todoToEdit = {
          listId: "",
          todo: {
            id: "",
            title: "",
            description: "",
            isDone: false,
          },
        };
      }
    },
    saveTodo: (state: TodoDataType) => {
      state.todoToEdit = {
        listId: "",
        todo: {
          id: "",
          title: "",
          description: "",
          isDone: false,
        },
      };
    },
    toggleMode: (state: TodoDataType) => {
      state.isDarkMode= !state.isDarkMode;
    },
  },
});

// this is for dispatch
export const { editTodoToggle, saveTodo, toggleMode } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
