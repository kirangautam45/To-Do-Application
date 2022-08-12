import React from 'react'

const cards = (props) => {
  return (
    <div>
       <div class="card">
  <img src={props.image} alt="Avatar"  width={100}/>
  <div class="container">
    <h4><b>{props.name}</b></h4>
    <p>{props.roll}</p>
    <p>{props.class}</p>
    <hr
  </div>
</div> 
    </div>
  )
}

export default cards