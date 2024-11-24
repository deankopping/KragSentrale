import "./App.css";
const OpneingDoor = () => {
  return (
    <div className="openingDoor">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="metalGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#777" />
            <stop offset="50%" stop-color="#666" />
            <stop offset="100%" stop-color="#555" />
          </linearGradient>
          <pattern
            id="scratches"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="5"
              x2="10"
              y2="5"
              stroke="#888"
              stroke-width="0.4"
              opacity="0.4"
            />
          </pattern>
          <linearGradient id="edgeShading" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stop-color="#222222 " opacity="0.3" />
            <stop offset="50%" stop-color="transparent" />
            <stop offset="100%" stop-color="#222222 " opacity="0.3" />
          </linearGradient>
        </defs>
        <g id="door">
          {Array.from({ length: 40 }, (_, i) => (
            <g transform={`translate(0, ${i * 20})`} key={i}>
              <rect
                x="0"
                y="0"
                width="1200"
                height="20"
                fill="url(#metalGradient)"
              />
              <rect
                x="0"
                y="0"
                width="1200"
                height="20"
                fill="url(#scratches)"
              />
              <rect
                x="0"
                y="0"
                width="1200"
                height="20"
                fill="url(#edgeShading)"
              />
            </g>
          ))}
        </g>
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0,0"
          to="0,-1000"
          dur="3s"
          fill="freeze"
          begin="0.5s"
        />
      </svg>
    </div>
  );
};

export default OpneingDoor;
