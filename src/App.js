import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Box from "./Components/Box.js"
function App() {
  const [mode,setMode] = useState('light');
  const handleMode=()=>{
    if (mode=='light')
        {
          setMode   ("dark")
          
        }
    else{
            setMode   ("light")
        }
        }

  return (
    <>
    <Navbar title="TEXTS2" mode={mode}/>
    <Box mode={mode}/>
    
    </>
  );
}

export default App;
