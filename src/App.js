import { BrowserRouter as Router } from "react-router-dom";
import React, { useState }from 'react'

// import { getUser } from '../../api/UserService';
import Navbar from "./components/Navbar";
import AgePopup from "./components/AgePopUp";


function App() {
  
  // const [user] = useState(getUser)
  const [age, setAge] = useState(0);


  return (age < 21 ? <AgePopup setAge={setAge} /> :

    <div className="App" style={{backgroundColor: 'black', color: 'white'}}>
      
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
