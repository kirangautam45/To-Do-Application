import './App.css';

function App() {
  return (
    <div>
      <div className='Body'>
      <div className='To_Body'>
        <h1 className='Header'> THINGS TO DO</h1>
        <input className='Input_text' placeholder='Add New' />
        </div>
        <div className='Wrapper_Icon_group'>
          <div  className='Icon_group'>
          <button className=''>Add</button>
          <button>SEARCH</button>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
