/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import API from "../../api";

const ListItem = ({todos, setTodos, input, setInput}) => {
// const [updateTodo, setUpdateTodo] = useState('')

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

  const updateTask = async(id) => {
    try{
      // setTodos((currItem) => currItem.find((todo) => todo.id === id))
      const response = await API.put(`/api/tasks/update/${id}`, { title: input });
      console.log(response.data); 
      setInput(response.data.title);
      setTodos(input);
      console.log('The task has been updated');

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

const toggleComplete = async (id, event) => {
    event.preventDefault();
    try{
      const updatedTodo = todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodo);
      await API.put(`/api/tasks/update/${id}`, {completed: updatedTodo.find((todo) => todo.id === id).completed})
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
                  {todo.id} * {todo.title}
                </p>
                <div className="icons">
                  <span title="Complete / Not Complete">
                    <FontAwesomeIcon  onClick={(e) => { toggleComplete(todo.id) }} icon={faCircleCheck} />
                  </span>
                  {
                    todo.completed ? null : (
                  <span>
                    <FontAwesomeIcon icon={faPen} onClick={(e) => { updateTask(todo._id)}} />
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
