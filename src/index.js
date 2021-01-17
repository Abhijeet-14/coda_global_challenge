import React from "react";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//
import "bootstrap/dist/css/bootstrap.min.css";

// reducer & context
import reducer, { initialState } from "./Reducer/reducer";
import { DataLayer } from "./Reducer/DataLayer";

// Components
import App from "./_App/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </DataLayer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);



if (module.hot) {
  module.hot.accept();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
