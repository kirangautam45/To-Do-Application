import React from "react";

const CardInput = (props) => {
  return (
    <div>
      <div div className="Body">
        <div className="To_Body">
          <input
            className="Input_text"
            placeholder="Add Student Name"
            value={props.addName}
            onChange={(e) => props.setAddName(e.target.value)}
          />
          <input
            className="Input_text"
            placeholder="Add Student Roll Number"
            value={props.addRollNumber}
            onChange={(e) => props.setRollNumber(e.target.value)}
          />
          <input
            className="Input_text"
            placeholder="Add class"
            value={props.addClass}
            onChange={(e) => props.setAddClass(e.target.value)}
          />

          <button className="add_button" onClick={props.addStudent}>
            ADD Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInput;
