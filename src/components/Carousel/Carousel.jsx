import React, { useState } from 'react';
import productImg from "../../assets/img/product.webp";

const data = [
  {
    src: productImg,
  },
  {
    src: productImg,
  },
  {
    src: productImg,
  },
];

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const itemWidth = e.target.clientWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative w-[45vh] overflow-hidden rounded-md">
      <div
        className="flex snap-x snap-mandatory overflow-x-auto w-[45vh] no-scrollbar"
        onScroll={handleScroll}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[45vh] snap-center mx-2"
          >
            <img
              className="w-[45vh] h-full object-cover object-center"
              src={item.src}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
