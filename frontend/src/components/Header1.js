import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './header.css'; 


// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img width={'100%'} height={'890'} alt='empty' src={require("../assets/header4.jpg")} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Mastepieces Of The Art Paintings And Drawings</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width={'100%'} height={'890'} alt='empty' src={require("../assets/header.jpg")} text="First slide" />
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Mastepieces Of The Art Paintings And Drawings</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width={'100%'} height={'890'} alt='empty' src={require("../assets/header1.jpg")} text="First slide" />
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p> Mastepieces Of The Art Paintings And Drawings</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;