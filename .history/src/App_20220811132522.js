import "./App.css";

function App() {
  return (
    <div>
      <div className="Body">
        <div className="To_Body">
          <h1 className="Header"> THINGS TO DO</h1>
          <input className="Input_text" placeholder="Add New" />
        </div>
        <div className="box" >
          <span className="">Go to home</span>

        </div>
        <div className="border"></div>
        <span className="">Go to School</span>
        
        <div className="Icon_group">
          <button className="Icon_button">Add</button>
          <button className="Icon_button">SEARCH</button>
        </div>
      </div>
    </div>
  );
}

export default App;
