import React from 'react'

const cards = (props) => {
  return (
    <div>
       <div class="card">
  <img src={props.image} alt="Avatar"  width={100}/>
  <div class="container">
    <h4><b>{}</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div> 
    </div>
  )
}

export default cards
