import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Box from "./Components/Box.js"
function App() {
  const [mode,setMode] = useState('dark');
  const handleMode=()=>{
    if (mode ==='light')
        {
          setMode   ("dark")
          document.body.style.backgroundColor='#4a1f0b'
          document.body.style.color="white"
        }
    else{
            setMode   ("light")
            document.body.style.backgroundColor="white"
            document.body.style.color="black"
        }
        }

  return (
    <>
    <Navbar title="TEXTS2" mode={mode}/>
    <Box mode={mode} changeMode={handleMode}/>
    
    </>
  );
}

export default App;
