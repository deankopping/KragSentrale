import { useMediaQuery } from "react-responsive";

import styles from "../../styles/imageSlider.module.css";

import React from "react";

const imageFiles = import.meta.glob(
  "./animatedSliderPhotos/**/*.{jpg,jpeg,png}",
  {
    eager: true,
    as: "url",
  }
);

const images = Object.values(imageFiles);

export type ItemProps = React.ButtonHTMLAttributes<HTMLDivElement>;

export default function AnimatedImageSlider() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  function Items({ children, ...props }: ItemProps) {
    return (
      <div className="items" {...props}>
        {children}
        {children}
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      <ul className={styles.carouselTrack}>
        <Items className={styles.carouselItems}>
          {images.map((artwork, index) => (
            <li className={styles.artworkItem} key={index}>
              <picture>
                <source srcSet={`${artwork} 400w`}></source>
                <img
                  src={artwork}
                  height={isMobile ? 280 : 400}
                  width={isMobile ? 280 : 400}
                ></img>
              </picture>
            </li>
          ))}
        </Items>
      </ul>
    </div>
  );
}
