import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import API from "../../api";
import {
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Stack,
  Typography,
  Modal,
  TextField,
  Button,
} from "@mui/material";

const ListItemComponent = ({ todos, setTodos, input, setInput }) => {
  const [open, setOpen] = useState(false);
  const [updatingTodoId, setUpdatingTodoId] = useState(null);

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

  const openUpdateModal = (id) => {
    const todo = todos.find((todo) => todo._id === id);
    setInput(todo.title);
    setUpdatingTodoId(id);
    setOpen(true);
  };

  const updateTask = () => {
    if (!updatingTodoId) return;
    const todo = todos.find((todo) => todo._id === updatingTodoId);
    console.log(todo.title);
    const newTitle = input;
    API.put(`/api/tasks/update/${updatingTodoId}`, { title: newTitle }).then(
      (response) => {
        console.log(response.data.title);
        const updatedTodos = todos.map((todo) =>
          todo._id === updatingTodoId
            ? { ...todo, title: response.data.title }
            : todo
        );
        setTodos(updatedTodos);
        setInput(response.data.title);
        setOpen(false);
      }
    );
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "var(--color-darkest)",
            padding: "16px",
            borderRadius: "8px",
            width: "630px",
            height: "120px",
          }}
        >
          <TextField
            value={input}
            id="outlined-basic"
            label="Update your task"
            color="success"
            variant="outlined" // onKeyPress={handleKeypress}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            sx={{
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              color: "#fff",
              width: "100%",
            }}
            InputProps={{
              style: { color: "#fff", fontSize: "16px" },
              classes: {
                root: "success-root",
                focused: "success-focused",
                notchedOutline: "success-notchedOutline",
              },
            }}
            InputLabelProps={{
              style: {
                color: "#DAD9D9",
                fontSize: "16px",
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              width: "30%",
              height: "50px",
              margin: "2px",
              backgroundColor: "#02943a",
              "&:hover": { backgroundColor: "#35af64" },
            }}
            onClick={updateTask}
          >
            Update a task
          </Button>
        </div>
      </Modal>
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
                  <IconButton onClick={() => openUpdateModal(todo._id)}>
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
    </>
  );
};

export default ListItemComponent;
