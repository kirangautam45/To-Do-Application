import React from "react";

const cards = (props) => {
  return (
    <div class="card">
      <img className="Image" src={props.image} alt="Avatar"  />
      <div class="container">
        <h4>
          <b>Name : {props.name}</b>
        </h4>
        <p>Roll Number : {props.roll}</p>
        <p>Class : {props.class}</p>
        <hr />
      </div>
    </div>
  );
};

export default cards;
