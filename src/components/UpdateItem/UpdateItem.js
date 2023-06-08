import React, { useState } from 'react'
import './UpdateItem.css'
import API from '../../api'

const UpdateItem = ({taskId}) => {

  const [taskData, setTaskData] = useState({
    title: '',
    completed: false
   });

  const handleInputChange = e => {
    setTaskData({ ...taskData, [e.target.title]: e.target.value });
  };

  const updateTask = e => {
    e.preventDefault();

    // Make the PUT request to update the task
    API.put(`/api/tasks/update/${taskId}`, taskData)
      .then(response => {
        console.log('Task updated successfully:', response.data);
        // Perform any additional actions after successful update
      })
      .catch(error => {
        console.error('Error updating task:', error);
        // Handle error scenarios
      });
  };

  // const handleKeypress = (e) => {
  //   if(e.key === 'Enter'){
  //     updateTask();
  //     setInput('');
  //   }
  // }
    return(
      <div className='additem'>
        <input type='text' value={taskData} className='todoinpt'  onChange={handleInputChange} />
        <button className='todobtn' disabled={taskData.length === 0}  onClick={updateTask}>Update</button>
      </div>
    )

}

export default UpdateItem;
