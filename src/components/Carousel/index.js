import React, { useState, useEffect } from "react";
import "./style.scss";

/**
 * A slide show of images, with arrows at the side, and dots to select the image underneath
 */
export default ({ triple = false, children, className = "", ...props }) => {
  const [index, setIndex] = useState(0);
  const interval = 4000;
  let timer;

  const [slides, setSlides] = triple
    ? useState(children.slice(0, 3))
    : useState([children[0]]);

  const increment = function (slideN) {
    const idx = index + slideN;
    if (idx >= children.length) {
      setIndex(0);
    } else if (idx < 0) {
      setIndex(children.length - 1);
    } else {
      setIndex(idx);
    }
  };

  useEffect(() => {
    timer = setInterval(() => increment(1), interval);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (triple) {
      if (index === children.length - 1) {
        setSlides([children[index]].concat(children.slice(0, 2)));
      } else if (index === children.length - 2) {
        setSlides(children.slice(index, index + 2).concat([children[0]]));
      } else {
        setSlides(children.slice(index, index + 3));
      }
    } else {
      setSlides([children[index]]);
    }
  }, [index]);

  /*The Arrows on the left/right of the slideshow*/
  const Cont = ({ dir, inc, char }) => (
    <div className={`${dir}-cont`} onClick={() => increment(inc)}>
      <div className={dir}>{char}</div>
    </div>
  );

  return (
    <div id="Carousel" className={`position-relative ${className}`} {...props}>
      <div
        className={`
            overflow-hidden 
            m-auto
            ${triple ? "triple-carousel" : "carousel"}
          `}
      >
        {slides.map((slide, cnt) => (
          <div key={cnt} className={`slide-${cnt}`}>
            {slide}
          </div>
        ))}
      </div>
      <Cont dir="prev" inc={-1} char="&#10094;" />
      <Cont dir="next" inc={1} char="&#10095;" />
      <br />
      <div className="flex-center-row w-100">
        {children.map((entry, dotIndex) => (
          <div
            key={dotIndex}
            className={`dot ${index === dotIndex && "active-dot"}`}
            onClick={() => setIndex(dotIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};
