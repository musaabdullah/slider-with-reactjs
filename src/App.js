import  {useState} from 'react';
import { SliderData } from './imageslider';
import './App.css';


// const length =  slides.length;
function App() {
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
                    {index === current && (<img src={slide.image} className="image" />)}
          </div>
        } )
      }
      </section>
    </div>
  );
}

export default App;
