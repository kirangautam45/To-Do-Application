import React from "react";

const cards = (props) => {
  return (
    <div class="card">
      <img src={props.image} alt="Avatar" width={100} />
      <div class="container">
        <h4>
          <b> Name: {props.name}</b>
        </h4>
        <p>Roll Numbe: {props.roll}</p>
        <p>Class: {props.class}</p>
        <hr />
      </div>
    </div>
  );
};

export default cards;
