import React, { useState } from "react";

function Todoinput() {
  const [todo, setTodo] = useState("");
  const [todId, setTodoId] = useState();

  const [allTodos, setAllTodos] = useState([]);

  const addTodoHandler = () => {
    setAllTodos([...allTodos,todo]);
    console.log(allTodos,todo);
    setTodo("");
    
  };

  const handleDelete = (e) => {
    setAllTodos(allTodos.filter((el,index) => ( index != e.target.value)))
  }

  return (
    <>
      <input
        
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={addTodoHandler}>Add Todo</button>

      <ul>
      {allTodos.map((el,index) => (
        
            <li 
            key={index}
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems: "center",
                gap:"15rem"
            }}>
                <h4>{el}</h4>
                <button 
                value={index}
                onClick={handleDelete}
                style={{
                    width:"50px",
                    height:"30px"
                }}>Delete</button>
            </li>
        
      ))}
      </ul>
    </>
  );
}

export default Todoinput;
