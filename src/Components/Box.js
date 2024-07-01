import React,{useState} from 'react'


export default function Box(props){
   
    const handleOnChange =(event)=>{
        
        modify(event.target.value);
    }
    const handleUpClick=()=>{
        
        modify(inp.toUpperCase());
    }
    const handleDownClick=()=>{
       
        modify(inp.toLowerCase());
    }


   
    const [inp,modify] = useState("Start typing");
    // modify("ANMOL");
    return (
        <>           
                <div className="mt-4 mb-3 container  justify-content-end">
                <label for="exampleFormControlTextarea1" className="form-label"><h2>Enter text here</h2></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="10" value={inp}></textarea>
                <div className="d-flex justify-content-end">
                    <button className={`btn btn-${props.mode} mt-2 mx-2`} onClick={handleUpClick}>CAPITALIZE</button>
                    <button className={`btn btn-${props.mode} mt-2 mx-2`}  onClick={handleDownClick}>Lowercase</button>
                    <button className="btn btn-secondary mt-2 mx-2" id="modebut" onClick={props.changeMode}>Mode</button>
                </div>
                <h1>RESULT</h1>
                <p>{inp.split(" ").length} words and {inp.length} letters</p>
                </div>
        </>
    )
}