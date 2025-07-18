import image from './asset/image/37801555.jpeg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  const randomImageUrl = "https://images.app.goo.gl/PH2bRrqH6Mt6q2sN7";
  const vidurl = "https://youtu.be/cmSbXsFE3l8?si=beeBCM4bdIDdS5lU";
  return (
    <div className="App">
      <h1>
        Task: Add 3 images with some styling
      </h1>
      <img height={200} src = {image} alt = "An image of me "/>
      <img height={200} src = {require("./asset/image/37801555.jpeg")} alt = "image of me"/>
      <img src={randomImageUrl}/>

      <ReactPlayer
      url={vidurl}
      playing ={false}
      volume={0.5}
      />
    </div>
  );
}

export default App;
