import React from "react";
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Doe"}
        firstName={"Jane"}
        Age={45}
        haircolor={"Black"}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"John"}
        Age={88}
        haircolor={"Brown"}
      />
      <PersonCard  
        lastName={"Fillmore"} 
        firstName={"Millard"} 
        Age={50} 
        haircolor={"Brown"} 
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"Maria"}
        Age={62}
        haircolor={"Brown"}
      />
    </div>
  );
}

export default App;
