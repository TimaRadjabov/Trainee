import React, { useEffect, useState } from "react";

import { FormattedMessage } from "react-intl";

import { sliderContent } from "./sliderContent";

import { backgroundImages } from "./backgroundImages";

import { SliderEllipses } from "./SliderEllipses";

import "./SliderStyles.css";

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveEllipse = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    // eslint-disable-next-line functional/no-conditional-statement
    if (activeIndex < sliderContent.length) {
      const interval = setInterval(() => setActiveIndex(activeIndex + 1), 5000);
      return () => clearInterval(interval);
    }
    return setActiveIndex(activeIndex - sliderContent.length);
  }, [activeIndex]);

  return (
    <div className="slider-component-wrapper">
      <div className="slider-carousel">
        <div
          className="slider-background_inner"
          // Had to use inline styling for background image switch
          style={{ transform: `translateX(-${activeIndex * 25}%)` }}
        >
          {backgroundImages.map((img) => (
            <div className="slider-carousel-item" key={img}>
              <img src={img} key={img} alt="" className="slider-img" />
            </div>
          ))}
        </div>
      </div>
      {sliderContent.map(
        (content) =>
          activeIndex === content.id && (
            <React.Fragment key={content.id}>
              <div className="slider-text_big">
                {content.bigTextFirstPart}
                <br />
                {content.bigTextSecondPart}
              </div>
              <div className="slider-text_small">{content.smallText}</div>
              {/* TODO: Figure out why <Button/> component dont use classname in prop */}
              <button type="button" className="slider-button">
                <FormattedMessage id="learnMoreButton" />
              </button>
              <SliderEllipses
                activeIndex={activeIndex}
                updateActiveEllipse={updateActiveEllipse}
              />
            </React.Fragment>
          )
      )}
    </div>
  );
};
