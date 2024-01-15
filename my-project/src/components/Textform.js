import React,{useState} from 'react'
export default function Textform(props) {
const [text,setText]=useState("");
const handleonchange=(e)=>{
    console.log('Handle On Change Was clicked');
    setText(e.target.value);
}
const handleUpClick=()=>{
    console.log('Handle up Click Was clicked');
let newText=text.toUpperCase();
setText(newText);
props.showalert("Converted to upper case","success");
} 
const handlelowClick=()=>{
    console.log('Handle low Click Was clicked');
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lower case","success");
}
const handleTrim=()=>{
    console.log('Handle Trim Click was clicked ');
    let newText=text.trim();
    setText(newText);
    props.showalert("Wide spaces has been removed","success");
}
const handleClear=()=>{
    console.log('Handle Clear Was clicled');
    setText("");
    props.showalert("input has been cleared","success");
}
const HandleExtraSpaces=()=>{
    console.log('Handle remove extra spaces was clicked');
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra Spaces has been removed","success");
}
const handleCopy=()=>{
    console.log('Handle Copy was clicked');
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text has been copied","success");
}
return (
    <>
    <div className='container'>
<h1>{props.heading}</h1>
<div className="mt-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-outline-primary m-2" onClick={handleUpClick}>Convert To Upper Case</button>    
<button className="btn btn-outline-primary m-2" onClick={handlelowClick}>Convert To Lower Case</button>    
<button className="btn btn-outline-primary m-2" onClick={handleTrim}>Remove Wide Spaces</button>    
<button className="btn btn-outline-primary m-2" onClick={handleCopy}>Copy Text</button>    
<button className="btn btn-outline-primary m-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>    
<button className="btn btn-outline-primary m-2" onClick={handleClear}>Clear Text</button>    
</div>
<div className="container my-3">
    <h2>Your Text Summary:</h2>
    <p>{text.length===0? 0: text.split(" ").length} words,{text.length} characters</p>
    <p>{ text.length===0?0:0.008*text.split(" ").length} minutes required to read</p>
    <h2>Preview:</h2>
    <p>{text.length>0?text:"Enter the text to preview here"}</p>
</div>
</> 
 )
}
