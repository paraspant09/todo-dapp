import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/config/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div
        style={{
          position: "absolute",
          height: "20px",
          backgroundColor: "#3772FF",
          color: "white",
          width: "100%",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        Please refresh the browser after transaction completes to see changes.
      </div>
      <App />
    </Provider>
  </React.StrictMode>
);
