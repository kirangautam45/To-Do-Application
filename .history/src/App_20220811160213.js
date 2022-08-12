import "./App.css";
import Tittle from "./components/Tittle"
import Input from "./components/Input";
import ToDoItem from "./components/ToDoItem";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div div className="Body">
        <div className="To_Body">
          <Tittle />
          <Input/>
        </div>
        <ToDoItem title="Go to home"/>
        <ToDoItem/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
