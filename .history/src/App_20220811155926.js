import "./App.css";
import Tittle from "./components/Tittle"
import Input from "./components/Input";
import ToDoItems from "./components/ToDoItem";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div div className="Body">
        <div className="To_Body">
          <Tittle />
          <Input/>
        </div>
        <ToDoItems/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
