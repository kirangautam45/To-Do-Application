import "./App.css";
import Tittle from "./components/Tittle"
import Input from "./components/Input";
import TodoDoItems from "./components/TodoDoItems";

function App() {
  return (
    <div>
      <div className="Body">
        <div className="To_Body">
          <Tittle />
          <Input/>
        </div>

        <TodoDoItems/>
      </div>
    </div>
  );
}

export default App;
