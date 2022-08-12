import "./App.css";
import Tittle from "./components/Tittle";
import Input from "./components/Input";
import ToDoItem from "./components/ToDoItem";
import Footer from "./components/Footer";
import Cards from "./components/cards";
import React from "react";

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
  { name: "Abc", rollNumber: 12, class: 6 },
  { name: "def", rollNumber: 12, class: 6 },
];

const App=()=> {
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
      <div>
        {studentName.map((student, index) => (
          <Cards
            key={index}
            name={student.name}
            roll={student.rollNumber}
            class={student.class}
          />
        ))}
      </div>
    </>
  );
}

export default App;
