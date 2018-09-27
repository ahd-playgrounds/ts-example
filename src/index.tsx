import * as React from "react";
import ReactDOM from "react-dom";
import { App, IProps } from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const butter: IProps = {
  age: 4,
  dick: "weed",
  message: "hello",
  name: "dave"
};

ReactDOM.render(
  <App
    message={butter.message}
    name={butter.name}
    age={butter.age}
    dick={"llob"}
  />,
  document.getElementById("root")
);
registerServiceWorker();
