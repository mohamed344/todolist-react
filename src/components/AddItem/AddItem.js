import React, { useState } from 'react'
import './AddItem.css'
import axios from 'axios';
const AddItem = ({todos, setTodos}) => {

  const [input, setInput] = useState("");

  const addItem = async () => {
    await axios.post('http://localhost:5000/api/tasks/create').then((response) => {
      setTodos(response.data)
      console.log(todos);
    })
  }

  // const handleClick = () => {
    
  //      const id = todos.length + 1;
  //      setTodos((prev) => [
  //       ...prev,
  //       {
  //         id: id,
  //         title: input,
  //         complete: false,
  //       },
  //     ]);
  //     setInput("");
  // }

  const handleKeypress = (e) => {
    if(e.key === 'Enter'){
      addItem();
    }
  }

  return (
    <div className='additem'>
        <input type='text' value={input} className='todoinpt' onKeyPress={handleKeypress} onChange={(e) => {setInput(e.target.value)}} />
        <button className='todobtn' disabled={input.length === 0}  onClick={addItem}>Add a task</button>
    </div>
  )
}

export default AddItem;
