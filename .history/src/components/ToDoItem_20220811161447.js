import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="Box">
      <input type="checkbox" />
      <span className=`${th}`>{props.title} </span>
      <hr />
    </div>
  );
};

export default ToDoItem;
