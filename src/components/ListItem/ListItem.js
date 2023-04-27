import React, { useEffect, useState } from "react";
import "./ListItem.css";
// import axios from "axios";

const ListItem = ({todos, setTodos}) => {

  // useEffect(() => {
  //   const getTodos = async () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => {
  //         setTodos(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getTodos();
  // }, []);

  const handleRemove = (id) => {
    setTodos((currItem) => currItem.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <ul className="items">
        {todos.map((todo) => {
          return (
            <>
              <li className="list" key={todo.id}>
                <p>
                  {todo.id} - {todo.title.substring(0, 52)}
                </p>
                <div className="buttons">
                  <button className="complete">Complete</button>
                  <button className="remove" onClick={() => handleRemove(todo.id)}>Remove</button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItem;
