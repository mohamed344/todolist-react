import React, { useState } from "react";
import "./Completed.css";


const Completed = () => {
  const [completed, setCompleted] = useState([]);

  const handleRemove = (id) => {
    setCompleted((currItem) => currItem.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h3 className="title">Task Completed</h3>
      <ul className="items">
        {completed.map((task) => {
          return (
            <>
              <li className="list" key={task.id}>
                <p>
                  {task.id} - {task.title.substring(0, 52)}
                </p>
                <div className="buttons">
                  <button className="complete">Complete</button>
                  <button
                    className="remove"
                    onClick={() => handleRemove(task.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Completed;
