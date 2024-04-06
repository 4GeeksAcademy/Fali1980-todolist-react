//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import ToDoList from "./component/todolist";
import TareaForm from "./component/tareaform";

//render your react application
ReactDOM.render(<TareaForm />, document.querySelector("#app"));
