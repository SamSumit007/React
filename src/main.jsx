import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <ReduxProvider store={store} >
        <App />
      </ReduxProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);