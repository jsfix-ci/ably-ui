import React, { useEffect, useRef } from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

import SliderScripts from "./component";

const Slider = ({
  slides = [],
  classes = "",
  slideClasses = "",
  slideMinWidth = "16.875rem",
  slideMaxWidth = "1fr",
  mqEnableThreshold = () => true,
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    SliderScripts({
      container: containerRef.current,
      mqEnableThreshold,
    });
  }, []);

  if (slides.length === 0) return;

  return (
    <div
      className="w-full overflow-x-hidden"
      data-id="slider"
      style={{
        "--dynamic-grid-columns-count": slides.length,
        "--dynamic-grid-column-min-width": slideMinWidth,
        "--dynamic-grid-column-max-width": slideMaxWidth,
      }}
      ref={containerRef}
    >
      <ol className={`grid ui-grid-gap grid-cols-dynamic transform transition-transform ${classes}`} data-id="slider-strip" {...props}>
        {slides.map((slide, i) => (
          <li key={i} className={slideClasses} data-id="slider-slide">
            {slide}
          </li>
        ))}
      </ol>

      <div className="justify-center items-center my-24 hidden" data-id="slider-controls">
        <button type="button" className="p-0 w-24 h-24 flex items-center focus:outline-gui-focus" data-id="slider-previous">
          <Icon
            name="icon-gui-disclosure-arrow"
            size="1.5rem"
            color="text-cool-black"
            additionalCSS="transform rotate-180"
            data-id="meganav-control-mobile-dropdown-menu"
          />
        </button>

        <ul className="flex justify-center items-center mx-32 relative h-24">
          {slides.map((_, i) => (
            <li key={i}>
              <span className="ui-slider-marker text-cool-black" data-id="slider-marker">
                &#x2b24;
              </span>{" "}
              {/* ⬤ */}
            </li>
          ))}
        </ul>

        <button type="button" className="p-0 w-24 h-24 flex items-center focus:outline-gui-focus" data-id="slider-next">
          <Icon name="icon-gui-disclosure-arrow" size="1.5rem" color="text-cool-black" data-id="meganav-control-mobile-dropdown-menu" />
        </button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slides: T.arrayOf(T.node),
  classes: T.string,
  slideClasses: T.string,
  slideMinWidth: T.string,
  slideMaxWidth: T.string,
  mqEnableThreshold: T.func,
};

export default Slider;
