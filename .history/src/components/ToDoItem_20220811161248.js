import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="Box">
      <input type="checkbox" />
      <span className="Text">{props.title} isCompleted={t}</span>
      <hr />
    </div>
  );
};

export default ToDoItem;