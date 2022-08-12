import "./App.css";
import Tittle from "./components/Tittle"
import Input from "./components/Input";
import ToDoItems from "./components/ToDoItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div div className="Body">
        <div className="To_Body">
          <Tittle />
          <Input/>
        </div>
        <ToDoItems  todo="Go"/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
