/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect} from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import API from "../../api";
import {UpdateItem} from "../index";

const ListItem = ({todos, setTodos}) => {

  useEffect(() => {
    getTodos();
  },[]);

  const getTodos = async () => {
    try{
      const response = await API.get('/api/tasks')
        console.log(response.data);
        setTodos(response.data);
    }catch(error) {
        console.log(error);
      };
  };

    const updateTask = async(id) => {
        const taskId = id;
        try{
        const response = await API.put(`/api/tasks/update/${taskId}`);
        console.log(response.data);
        setTodos(response.data.title);
        <UpdateItem taskId={taskId} />
        }catch(error){
        console.log(error);
        }
  }

  const removeTodo = async (id) => {
  try {
    await API.delete(`/api/tasks/delete/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  } catch (error) {
    console.error('Error removing todo:', error);
  }
};

const toggleComplete = (id) => {
      const taskId = id;
      API.patch(`/api/tasks/edit/${taskId}`, { completed: true })
      .then(response => {
        setTodos(response.data)
      })
      .catch(error => {
        console.log(error);
      });
};

  return (
    <div>
      <ul className="items">
        {todos.map((todo) => {
          return (
              <li key={todo._id} className="list" >
                <p style={{ textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? "gray" : "white" }}>
                  {todo.title}
                </p>
                <div className="icons">
                  <span title="Complete / Not Complete">
                    <FontAwesomeIcon  onClick={(e) => { toggleComplete(todo._id) }} icon={faCircleCheck} />
                  </span>
                  {
                    todo.completed ? null : (
                  <span>
                    <FontAwesomeIcon icon={faPen} onClick={() => { updateTask(todo._id)}} />
                  </span>
                    )
                  }
                  <span>
                    <FontAwesomeIcon className="remove" icon={faTrashCan} onClick={() => removeTodo(todo._id)} />
                  </span>
                </div>
              </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItem;
