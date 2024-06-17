import React, { useState } from "react";
import Tours from "./components/Tours";
//import Card from "./components/Card";
import data from "./data";

const App =() =>{

  const[tours,setTour] = useState(data);

  function removetours(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTour(newTour);
  }
  
  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTour(data)}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removetours={removetours}></Tours>
    </div>
  )

 };


export default App;
