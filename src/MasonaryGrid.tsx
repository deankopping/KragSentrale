import { useMediaQuery } from "react-responsive";
import "./styles/MasonaryGrid.css";
import Header from "./Header";
import PageWrapper from "./PageWrapper";

interface MasonryColumn {
  photo: string;
  height: number;
}

const imageFiles = import.meta.glob("/**/*.{jpg,jpeg,png}", {
  eager: true,
  as: "url",
});

const photos = Object.values(imageFiles);

export default function MasonryGrid() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const columnCount = isMobile ? 2 : 3;

  const columns: MasonryColumn[][] = Array.from(
    { length: columnCount },
    () => []
  );

  photos.forEach((photo, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push({
      photo: photo,
      height: 500,
    });
  });

  return (
    <div>
      <Header />
      <PageWrapper>
        <div className="masonry-container">
          <div className="masonry-grid">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="masonry-column">
                {column.map((photo, imageIndex) => (
                  <img
                    key={`${columnIndex}-${imageIndex}`}
                    className="masonry-image"
                    src={photo.photo}
                    alt={`Image ${
                      columnIndex * column.length + imageIndex + 1
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
