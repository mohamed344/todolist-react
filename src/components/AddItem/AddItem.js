import React, { useState } from 'react'
import './AddItem.css'
const AddItem = ({todos, setTodos}) => {

  const [input, setInput] = useState("");



  const handleClick = () => {
       const id = todos.length + 1;
       setTodos((prev) => [
        ...prev,
        {
          id: id,
          title: input,
          complete: false,
        },
      ]);
      setInput("");
  }

  const handleKeypress = (e) => {
    if(e.key === 'Enter'){
      handleClick();
    }
  }

  return (
    <div className='additem'>
        <input type='text' value={input} className='todoinpt' onKeyPress={handleKeypress} onChange={(e) => {setInput(e.target.value)}} />
        <button className='todobtn' disabled={input.length === 0}  onClick={handleClick}>Add a task</button>
    </div>
  )
}

export default AddItem;
