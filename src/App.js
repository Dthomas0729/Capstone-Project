import { BrowserRouter as Router } from "react-router-dom";
// import React, { useState }from 'react'

// import { getUser } from '../../api/UserService';
import Navbar from "./components/Navbar";

function App() {
  
  // const [user] = useState(getUser)

  return (
    <div className="App" style={{backgroundColor: 'black', color: 'white'}}>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
