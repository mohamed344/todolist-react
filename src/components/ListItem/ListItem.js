import React, { useEffect, useState } from "react";
import "./ListItem.css";
import axios from "axios";

const ListItem = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          setTodos(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getTodos();
  }, []);

  return (
    <div>
      <ul className="items">
        {todos.map((todo) => {
          return (
            <>
              <li className="list" key={todo.id}>
                <p>{todo.title}</p>
                <div className="buttons">
                  <button>Remove</button>
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
