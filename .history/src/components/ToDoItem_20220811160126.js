import React from "react";
/**
 * 
 * @param {*} props 
 * @returns 
 */
const ToDoItem = (props) => {
  return (
    <div className="Box">
      <input type="checkbox" />
      <span className="Text">Go to home</span>
      <hr />
    </div>
  );
};

export default ToDoItem;
