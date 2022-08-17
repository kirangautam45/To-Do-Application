import React, { useState } from "react";
import "./App.css";
import Tittle from "./components/Tittle";
import Input from "./components/Input";
import ToDoItem from "./components/ToDoItem";
import Footer from "./components/Footer";

import Cards from "./components/cards/Cards";
import CardInput from "./components/cards/CardInput";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

const todos = [
  { task: "Go to Home", isCompleted: false },
  { task: "Go to gym", isCompleted: true },
];

const App = () => {
  const [addName, setAddName] = useState();
  const [addClass, setAddClass] = useState();
  const [addRollNumber, setRollNumber] = useState();
 
  const [studentName, setStudentName] = useState([
    { name: "Indu", rollNumber: 12, class: 6, studentImage: img1 },
    { name: "Ram", rollNumber: 13, class: 6, studentImage: img2 },
    { name: "Sita", rollNumber: 14, class: 6, studentImage: img3 },
    { name: "Ganga", rollNumber: 15, class: 6, studentImage: img4 },
  ]);

  const addStudent = () => {
    let addStudentDetails = {
      name: addName,
      class: addClass,
      rollNumber: addRollNumber,
  
    };
    setStudentName([...studentName, addStudentDetails]);
  };

  return (
    <>
      <div div className="Body">
        <div className="To_Body">
          <Tittle />
          <Input />
        </div>
        {todos.map((item, index) => (
          <ToDoItem
            key={index}
            title={item.task}
            isCompleted={item.isCompleted}
          />
        ))}
        <Footer />
      </div>
      <CardInput
        addStudent={addStudent}
        setAddName={setAddName}
        addName={addName}
        setRollNumber={setRollNumber}
        addRollNumber={addRollNumber}
        setAddClass={setAddClass}
        addClass={addClass}
      />
      <div className="Card_warp">
        {studentName.map((student, index) => (
          <Cards
            key={index}
            name={student.name}
            roll={student.rollNumber}
            class={student.class}
            image={student.studentImage}
          />
        ))}
      </div>
    </>
  );
};

export default App;
