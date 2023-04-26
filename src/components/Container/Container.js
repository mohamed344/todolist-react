import React from 'react'
import './Container.css'

const Container = (props) => {
  return (
    <div className='hero'>
        <div className='info'>{props.children}</div>
    </div>
  )
}

export default Container;
