import React, { useState, useEffect } from "react";
import AddItem from "../AddItem/AddItem";
import ListItem from "../ListItem/ListItem";
import API from "../../api";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        if(todos.length > 0) return;
        API.get("/api/tasks").then((response) => setTodos(response.data));
    }, [todos]);

    return (
        <div>
            <AddItem input={input} setInput={setInput} />
            {todos.length > 0 && <ListItem todos={todos} setTodos={setTodos} />}
        </div>
    );
};

export default Home;
