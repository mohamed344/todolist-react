import React from 'react'
import './AddItem.css'
import API from '../../api'
const AddItem = ({input, setInput}) => {

  const handleSubmit = async () => {
    try {
      const response = await API.post('/api/tasks/create', { title: input });
      console.log(response.data); 
      setInput('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeypress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit();
    }
  }

  return (
    <div className='additem'>
        <input type='text' value={input} className='todoinpt' onKeyPress={handleKeypress} onChange={(e) => {setInput(e.target.value)}} />
        <button className='todobtn' disabled={input.length === 0}  onClick={handleSubmit}>Add a task</button>
    </div>
  )
}

export default AddItem;
