import { configureStore } from "@reduxjs/toolkit";
import blockChainReducer from "../slices/blockChainSlice";
import todoReducer from "../slices/todoSlice";

export const store = configureStore({
  reducer: {
    blockchain: blockChainReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
