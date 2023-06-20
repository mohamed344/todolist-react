import React, { useState, useEffect } from "react";
import { AddItem } from "../index";
import ListItem from "../ListItem/ListItem";
import API from "../../api";
import { Stack } from "@mui/material";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

 

  useEffect(() => {
    if (todos.length > 0) return;
    API.get("/api/tasks").then((response) => setTodos(response.data));
  }, [todos]);

  const handleSubmit = () => {
    API.post("/api/tasks/create", { title: input }).then((response) => {
      console.log(response.data);
      setTodos(response.data);
      setInput("");
    });
  };

  

  

  return (
    <Stack>
      
      <AddItem input={input} setInput={setInput} handleSubmit={handleSubmit} />
      {todos.length > 0 && (
        <ListItem 
            todos={todos} 
            setTodos={setTodos} 
            input={input} 
            setInput={setInput}
        />
      )}
    </Stack>
  );
};

export default Home;
