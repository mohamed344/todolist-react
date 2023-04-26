import React from 'react'
import './AddItem.css'
const AddItem = () => {
  return (
    <div className='additem'>
        <input type='text' className='todoinpt' />
        <button className='todobtn'>Add to do</button>
    </div>
  )
}

export default AddItem
