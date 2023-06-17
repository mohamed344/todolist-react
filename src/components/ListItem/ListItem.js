import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faPen, faTrashAlt,} from "@fortawesome/free-solid-svg-icons";
import API from "../../api";
import {IconButton,List,ListItemIcon,ListItemText,ListItem,Stack,Typography} from "@mui/material";

const ListItemComponent = ({ todos,setTodos , setInput }) => {

    const updateTask = async (id) => {
        const todo = todos.find((todo) => todo._id === id);
        const title = todo.title
        const response = await API.put(`/api/tasks/update/${id}`, title );
        console.log(response.data);
        const updateTodo = {...todo, title: response.data.title}
        const updateTodos = todos.map((todo) => todo._id === id ? updateTodo : todo)
        setTodos(updateTodos);
        setInput(response.data.title)
    };

  const removeTodo = async (id) => {
    await API.delete(`/api/tasks/delete/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const toggleComplete = (id) => {
    const todo = todos.find((todo) => todo._id === id);
    const newCompleted = !todo.completed;
    API.put(`/api/tasks/edit/${id}`, { completed: newCompleted }).then(
      (response) => {
        console.log(response.data.completed);
        const updateTodo = todos.map((todo) => {
          if (todo._id === id) {
            return { ...todo, completed: newCompleted };
          }
          return todo;
        });
        setTodos(updateTodo);
      }
    );
  };

  return (
    <Stack>
      <List style={{ width: "35rem", padding: "5px 0" }}>
        {todos.map((todo) => (
          <ListItem
            key={todo._id}
            style={{
              backgroundColor: "var(--color-dark)",
              margin: "8px 0",
              padding: "10px",
              borderRadius: 10,
            }}
          >
            <IconButton onClick={() => toggleComplete(todo._id)}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  color: "#02943a",
                  fontSize: "16px",
                }}
              />
            </IconButton>
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "gray" : "white",
                  }}
                >
                  {todo.title}
                </Typography>
              }
            />
            <ListItemIcon></ListItemIcon>
            {!todo.completed && (
              <>
                <IconButton onClick={() => updateTask(todo._id)}>
                  <FontAwesomeIcon
                    icon={faPen}
                    style={{
                      color: "#02943a",
                      fontSize: "18px",
                    }}
                  />
                </IconButton>
              </>
            )}
            <IconButton onClick={() => removeTodo(todo._id)}>
              <FontAwesomeIcon
                icon={faTrashAlt}
                style={{
                  color: "#F63E3E",
                  fontSize: "18px",
                }}
              />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ListItemComponent;
