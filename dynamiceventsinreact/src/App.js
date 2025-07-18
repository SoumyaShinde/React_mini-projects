import logo from './logo.svg';
import './App.css';

function App() {
  function handler(){
    let randomNum = Math.floor(Math.random()*5)+1;
    console.log(randomNum);
    let userInput = prompt("Type a number");
    console.log(userInput)
    alert(`the generated # is ${randomNum}, user input is ${userInput}`);
  }

  return (
    <button onClick={handler}> 
      Guess the number between 1 and 5 
    </button>
    
  );
}

export default App;
