import React, { useState } from "react";
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from './components/About';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0e0b0b";
      document.body.style.color = "white";
      document.title = "Textutile-DarkMode";
      showalert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "Textutile-LightMode";
      showalert("Light Mode has been enabled", "success");
    }
    
  };
  return (
   // <Router>
   <>
      <Navbar title="TextUtile" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
      <Textform heading="Enter the text to analyze below:" mode={mode} showalert={showalert}/>
      </div>
   </>   
   // </Router>
  );
}

export default App;
