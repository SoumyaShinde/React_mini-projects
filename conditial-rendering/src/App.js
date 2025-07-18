import './App.css';

function App() {
  const time = new Date();
  const day = time.toLocaleString("en-us",{weekday:"long"})
  const morning = time.getHours() >=6 && time.getHours()<=12;
  let dayMessage;

  if(day.toLowerCase() === "monday"){
    dayMessage = `Happy ${day}`
  }else if(day.toLowerCase() === "tuesday"){
    dayMessage = `${day}, 4 more days to go`
  }else if(day.toLowerCase() === 'wednesday'){
    dayMessage = `${day}, 3 more days to go`
  }else if(day.toLowerCase() === 'thursday'){
    dayMessage = `${day},start planning the weekend`
  }else if(day.toLowerCase() === 'friday'){
    dayMessage = `wohoo!! weekend is coming`
  }else{
    dayMessage = `stay calm and have fun`
  }

  return (
    <div className="App">
      <h1>{dayMessage}</h1>
      {morning ? <h2> Did you have your breakfast yet?</h2>:''}
    </div>
  );
}

export default App;
