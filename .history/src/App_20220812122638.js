import React from "react";
import "./App.css";
import Tittle from "./components/Tittle";
import Input from "./components/Input";
import ToDoItem from "./components/ToDoItem";
import Footer from "./components/Footer";
import Cards from "./components/cards";
import imageData from "./assets/image";

const todos = [
  {
    task: "Go to Home",
    isCompleted: false,
  },
  {
    task: "Go to gym",
    isCompleted: true,
  },
];
const studentName = [
  { name: "Abc", rollNumber: 12, class: 6, studentImage: { imageData } },
  { name: "def", rollNumber: 12, class: 6, image: 2 },
];

const App = () => {
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
