import './App.css';
//import Ratings from './components/Ratings';
import ImageSlider from './components/imageSlider';
function App() {
  return (
    <div className="App">
      {/*<Ratings noOfStars={10} /> */}
      <ImageSlider url="https://picsum.photos/v2/list" page={"1"} limit={"10"} />
    </div>
  );
}

export default App;
