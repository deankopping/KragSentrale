import React, { useEffect, useState } from "react";
import "./index.css"; // Optional: if you want to keep the styles separate

const CursorBlob = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorPosition({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="blob"
      style={{
        transform: `translate3d(calc(${cursorPosition.x}px - 50%), calc(${cursorPosition.y}px - 50%), 0)`,
      }}
    ></div>
  );
};

export default CursorBlob;
