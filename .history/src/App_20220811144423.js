import "./App.css";

function App() {
  return (
    <div>
      <div className="Body">
        <div className="To_Body">
          <h1 className="Header"> THINGS TO DO</h1>
          <input className="Input_text" placeholder="Add New" />
        </div>
        <div className="Box">
          <input type="checkbox" />
          <span className="Text">Go to home</span>
          <hr />
          <div className="Border"></div>
          <input className="Text" type="checkbox" />{" "}
          <span className="Text"> Go to School </span>
          <hr />
        </div>
        <div>
          <div className="Icon">
              <button  className="Icon_button">Add</button>
              <button className="Icon_button">SEARCH</button>
              <button className="Icon_button">All</button>
              
              <button className="Icon_button">Incomplete</button>
              <button className="Icon_button">Completed</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
