import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/config/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="notification-bar">
        Please refresh the browser after transaction completes to see changes.
      </div>
      <App />
    </Provider>
  </React.StrictMode>
);
