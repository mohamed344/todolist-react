import React from 'react'
import './AddItem.css'
import API from '../../api'
const AddItem = ({setTodos, input, setInput}) => {

  const handleSubmit = async () => {
    try {
      const response = await API.post('/api/tasks/create', { title: input });
      console.log(response.data);
      setInput('');
    } catch (error) {
      console.error(error);
    }
  };


  // const updateTask = async(id) => {
  //   try{
  //     const response = await API.put(`/api/tasks/update/${id}`, { title: input });
  //     console.log(response.data); 
  //     setInput(response.data.title);
  //       setTodos((prev) => [...prev, input]);
  //       console.log('The task has been updated');
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  const handleKeypress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit();
      setInput('');
    }
  }
    return (
      <>
          <div className='additem'>
            <input type='text' className='todoinpt' onKeyPress={handleKeypress} onChange={(e) => {setInput(e.target.value)}} />
            <button className='todobtn' disabled={input.length === 0}  onClick={handleSubmit}>Add a task</button>
          </div>
      </>
      )

}

export default AddItem;
