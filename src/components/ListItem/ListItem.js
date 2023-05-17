/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ListItem = ({todos, setTodos}) => {
// const [updateTodo, setUpdateTodo] = useState('')

  useEffect(() => {
    getTodos();
  },[todos]);

  const getTodos = async () => {
    try{
      const response = await axios.get('http://localhost:5000/api/todos')
        setTodos(response.data);
    }catch(error) {
        console.log(error);
      };
  };

  const updateTask = (id) => {
    setTodos((currItem) => currItem.find((todo) => todo.id === id))
  }


  const removeTodo = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/todos/delete/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  } catch (error) {
    console.error('Error removing todo:', error);
  }
};

  const toggleComplete = (index) => {
    const newItems = [...todos];
    newItems[index - 1].completed = !newItems[index - 1].completed;
    setTodos(newItems);
  };

  return (
    <div>
      <ul className="items">
        {todos.map((todo) => {
          return (
            <>
              <li key={todo._id} className="list" >
                <p style={{ textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? "gray" : "white" }}>
                  {todo.id} * {todo.title}
                </p>
                <div className="icons">
                  <span title="Complete / Not Complete">
                    <FontAwesomeIcon  onClick={(e) => { toggleComplete(todo.id) }} icon={faCircleCheck} />
                  </span>
                  {
                    todo.completed ? null : (
                  <span>
                    <FontAwesomeIcon icon={faPen} onClick={(e) => { updateTask(todo.id)}} />
                  </span>
                    )
                  }

                  <span>
                    <FontAwesomeIcon className="remove" icon={faTrashCan} onClick={() => removeTodo(todo._id)} />
                  </span>
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
