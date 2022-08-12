import "./App.css";
import Tittle from "./components/Tittle"
import Input from "./components/Input";
import ToDoItems from "./components/ToDoItems";
import 

function App() {
  return (
    <div>
      <div className="Body">
        <div className="To_Body">
          <Tittle />
          <Input/>
        </div>
        <ToDoItems/>
      </div>
    </div>
  );
}

export default App;
