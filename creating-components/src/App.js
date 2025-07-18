import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';

function Header(props){
  console.log(props)
  return <h1>Hello there, {props.name} {props.color}</h1>
}

const bool = false;
const str1 = "just";

function Example(props){
  return(
    <div>
      <h2>The value of toggleBoolean is {props.toggleBoolean.toString()}</h2>
      <p>Value of math prop is <em>{props.math}</em></p>
      <p>value of str prop is <em>{props.str}</em></p>
    </div>
  );
};

function App() {
  return( 
    <div className='App'>
      <Example
        toggleBoolean = {!bool}
        math = {(10+20)/3}
        str = {str1 +'another' +'string'}
      />
      <Header name = "Anna" color="purple"/>
      <Nav/>
      <Intro1 />
    </div>
  );
}

export default App;
