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
          <div className='Mid_part'>
          <div class="TodoApp__list">
            <input class="TodoApp__checkbox" type="checkbox">
              <span class="">Go to Hospital</span> </input>
              </div><div class="TodoApp__list">
                <input class="TodoApp__checkbox" type="checkbox" checked=""><span class="TodoApp_completed_task">Go to School</span></div>
          </div>
          <div  className='Icon_group'>
          <button className='Icon_button'>Add</button>
          <button className='Icon_button'>SEARCH</button>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
