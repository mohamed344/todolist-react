import React, { useState } from 'react';
import AddItem from '../AddItem/AddItem';
import ListItem from '../ListItem/ListItem';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  return (
    <div>
        <AddItem todos={todos} setTodos={setTodos} input={input} setInput={setInput} />
        <ListItem todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
