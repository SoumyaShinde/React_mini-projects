import React, {useState} from 'react'


export default function ToggleMode(){
    let [word, setWord] = React.useState('Light');

    const message = <h1>{word} mode is on</h1>
    function handler(){
        if(word == "Dark"){
            setWord("Light");
        }else{
            setWord("Dark");
        }
    }
    return(
        <div>
            {message}
            <button onClick={handler}>
                Change mode
            </button>
        </div>
    );
}