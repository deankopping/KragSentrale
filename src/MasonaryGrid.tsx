import React from "react";
import { useMediaQuery } from "react-responsive";
import "./styles/MasonaryGrid.css";
import Header from "./Header";

interface MasonryColumn {
  photo: string;
  height: number;
}

const imageFiles = import.meta.glob("/public/**/*.{jpg,jpeg,png}", {
  eager: true,
  as: "url",
});

const photos = Object.values(imageFiles);

export default function MasonryGrid() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const columnCount = isMobile ? 2 : 3;

  // Distribute photos across columns in round-robin fashion
  const columns: MasonryColumn[][] = Array.from(
    { length: columnCount },
    () => []
  );

  photos.forEach((photo, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push({
      photo: photo,
      height: 500, // Default height maintained for consistency
    });
  });

  return (
    <div>
      <Header />
      <div className="masonry-container">
        <div className="masonry-grid">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="masonry-column">
              {column.map((photo, imageIndex) => (
                <img
                  key={`${columnIndex}-${imageIndex}`}
                  className="masonry-image"
                  src={photo.photo}
                  alt={`Image ${columnIndex * column.length + imageIndex + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
