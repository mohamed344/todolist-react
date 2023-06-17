import React, { useState, useEffect } from "react";
import {AddItem, UpdateItem} from "../index";
import ListItem from "../ListItem/ListItem";
import API from "../../api";
import { Stack } from "@mui/material";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        if(todos.length > 0) return;
            API.get("/api/tasks").then((response) => setTodos(response.data));
    }, [todos]);
    
    return (
        <Stack>
            <AddItem input={input} setInput={setInput} />
            <UpdateItem input={input} setInput={setInput} />
            {todos.length > 0 && <ListItem todos={todos} setTodos={setTodos} setInput={setInput} />}
        </Stack>
    );
};

export default Home;
