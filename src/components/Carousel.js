// import React, { useState } from "react";
// import "./Carousel.css";

// const Carousel = () => {
//   const images = [
//     "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1316eb53d6f52c71.jpg?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6060e981bd2aecc9.jpg?q=20",
//     "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d9290fb51138d286.png?q=20",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Next and Previous Slide Functions
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="carousel-container">
//       <button className="prev" onClick={prevSlide}>
//         Prev
//       </button>

//       <div className="carousel-slide">
//         <img src={images[currentIndex]} alt="carousel" />
//       </div>

//       <button className="next" onClick={nextSlide}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function Carousel() {
  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1316eb53d6f52c71.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6060e981bd2aecc9.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d9290fb51138d286.png?q=20",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Carousel>
      <Carousel.Item>
        <img src={images[currentIndex]} alt="carousel" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel;
