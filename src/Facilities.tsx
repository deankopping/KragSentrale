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
                <img src={artwork} height={400} width={400}></img>
              </li>
            </div>
          ))}
        </Items>
        {/* <Items className="carousel-items">
          {images.map((artwork) => (
            <li className="artwork-item" key={artwork}>
              <img src={artwork} height={400} width={400}></img>
            </li>
          ))}
        </Items> */}
      </ul>
    </div>
  );
}
