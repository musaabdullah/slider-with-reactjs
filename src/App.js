import  {useState, useEffect } from 'react';
// import { SliderData } from './imageslider';
import './App.css';
import axios from 'axios';
function App() {

  const [SliderData, setSliderData] = useState([]);

  useEffect(() => {
     const fetchData = async() => {
       const { data } = await axios.get("https://reqres.in/api/users");
       setSliderData(data.data);
       console.log(data.data);
     }
     fetchData();
  },[])

  const [current, setCurrent] = useState(0);

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  }
  if(!Array.isArray(SliderData) || SliderData.length <= 0){
    return null;
  }
  return (
    <div className="App">
      <section className="slider">
        <i className="left-arrow fa fa-toggle-left" onClick={prevSlide}></i>
        <i className="right-arrow fa fa-toggle-right" onClick={nextSlide}></i>
      {
        SliderData.map((slide, index) => {
          return  <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                    
                    <img src={slide.avatar} className="image" />
                    
                    )}
          </div>
        } )
      }
      </section>
    </div>
  );
}

export default App;
