import { BrowserRouter as Router } from "react-router-dom";
import React from 'react'

// import { getUser } from '../../api/UserService';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  
  // const [user] = useState(getUser)
  return (
    
    <div className="App" style={{backgroundColor: 'black', color: 'white'}}>
      
      <Router>
        <Navbar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
