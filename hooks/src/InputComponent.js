import { useState } from "react";
export default function InputComponent(){
    const[inputText, setText] = useState("Hello");
    function handleChange(e){
        setText(e.target.value);
    }
    return(
        <>
       <label> Input: <input value={inputText} onChange={handleChange}/></label>
        <p> you typed: {inputText}</p>
        <button onClick={()=>setText("Hello")}>
            Reset
        </button>
        </>
    );
}