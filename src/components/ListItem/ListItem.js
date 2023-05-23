/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import API from "../../api";

const ListItem = ({todos, setTodos, setInput}) => {

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    getTodos();
  },[todos]);

  const getTodos = async () => {
    try{
      const response = await API.get('/api/tasks')
        setTodos(response.data);
    }catch(error) {
        console.log(error);
      };
  };

  const editTask = async(id) => {
    try{
      const response = await API.get(`/api/tasks/edit/${id}`);
      console.log(response.data); 
      setInput(response.data.title);
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

const toggleComplete = async (id) => {
    try{
      const response = await API.get(`/api/tasks/show/${id}`, {completed: !completed});
      console.log(response.data.completed);
      setCompleted(response.data.completed); 
    }catch (error){
      console.log(error);
    }
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
                    <FontAwesomeIcon icon={faPen} onClick={() => { editTask(todo._id)}} />
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
