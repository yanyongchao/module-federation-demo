import logo from "./logo.svg";
import React from "react";
import "./App.css";

const ChildApp = React.lazy(() => import("remoteStudentProject/studentModule"));

function App() {
  return <ChildApp></ChildApp>;
}

export default App;
