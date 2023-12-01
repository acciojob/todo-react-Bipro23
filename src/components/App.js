import React from "react";
import './../styles/App.css';
import Todoinput from "./Todo-input";

const App = () => {
  return (
    <div id="container">
        {/* Do not remove the main div */}
        <h1>To-do List</h1>
        <Todoinput/>
    </div>
  )
}

export default App
