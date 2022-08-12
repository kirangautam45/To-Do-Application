import "./App.css";
import Tittle from "./components/Tittle";
import Input from "./components/Input";
import ToDoItem from "./components/ToDoItem";
import Footer from "./components/Footer";
import Cards from "./components/cards";

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
const studentNmae = [
  { name: "Abc", rollNumber: 12, class: 6 },
  { name: "def", rollNumber: 12, class: 6 },
];

function App() {
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
      {studentNmae.map((student,index)=>(
        <Cards 
        key ={}
        />
      ))
      }
      
    </>
  );
}

export default App;
