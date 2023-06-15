import React, { useState } from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import API from "../../api";
import { UpdateItem } from "../index";
import {
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

const ListItemComponent = ({ todos, setTodos }) => {

    const [completed, setCompleted] = useState(false)

    const updateTask = async (id) => {
        const taskId = id;
        try {
        const response = await API.put(`/api/tasks/update/${taskId}`);
        console.log(response.data);
        setTodos(response.data.title);
        } catch (error) {
        console.log(error);
        }
    };

    const removeTodo = async (id) => {
        await API.delete(`/api/tasks/delete/${id}`);
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    const toggleComplete = async (id) => {
        const taskId = id;
        try {
        const response = await API.put(`/api/tasks/edit/${taskId}`, !completed );
        console.log(response.data.completed);
        setTodos(response.data);
        setCompleted(response.data.complete)
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <Stack>
        <List style={{width: '35rem', padding: '5px 0'}}>
            {todos.map((todo) => (
            <ListItem key={todo._id} style={{ backgroundColor: 'var(--color-dark)', margin: '8px 0', padding: '10px', borderRadius: 10}} >
                <IconButton onClick={() => toggleComplete(todo._id)}>
                    <FontAwesomeIcon icon={faCircleCheck} style={{
                        color: "#02943a", fontSize: "16px"
                    }} />
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
                <ListItemIcon >
                </ListItemIcon>
                {!todo.completed && (
                <>
                    <IconButton onClick={() => updateTask(todo._id)}>
                    <FontAwesomeIcon icon={faPen} style={{
                        color: "#02943a", fontSize: "18px"
                    }} />
                    </IconButton>
                </>
                )}
                <IconButton onClick={() => removeTodo(todo._id)}>
                <FontAwesomeIcon icon={faTrashAlt} style={{
                        color: "#F63E3E", fontSize: "18px"
                        }} />
                </IconButton>
            </ListItem>
            ))}
        </List>
        </Stack>
    );
};

export default ListItemComponent;
