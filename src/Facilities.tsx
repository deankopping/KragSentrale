import "./styles/Facilities.css";

import React from "react";

const imageFiles = import.meta.glob(
  "/src/animatedSliderPhotos/**/*.{jpg,jpeg,png}",
  {
    eager: true,
    as: "url",
  }
);

const images = Object.values(imageFiles);

export type ItemProps = React.ButtonHTMLAttributes<HTMLDivElement>;

export default function Facilities() {
  function Items({ children, ...props }: ItemProps) {
    return (
      <div className="items" {...props}>
        {children}
        {children}
      </div>
    );
  }

  return (
    <div className="carousel">
      <ul className="carousel-track">
        <Items className="carousel-items">
          {images.map((artwork, index) => (
            <div className="artwork-container" key={index}>
              <li className="artwork-item">
                <picture>
                  <source srcSet={`${artwork} 400w`}></source>
                  <img src={artwork} height={400} width={400}></img>
                </picture>
              </li>
            </div>
          ))}
        </Items>
      </ul>
    </div>
  );
}
