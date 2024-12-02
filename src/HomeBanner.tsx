import "./index.css";
import "./styles/HomeBanner.css";
import TensionBoard from "./assets/TensionBoard.jpg"; // Import the image

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <div style={{ marginLeft: "-20px" }}>
        <svg
          width="1000
        "
          height="600"
          viewBox="0 0 494 212"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_8_4)">
            <path
              d="M7.05 1.2H24.6V27.21L34.23 1.2H53.13L41.07 32.61L52.5 66H33.6L24.6 38.55V66H7.05V1.2ZM79.4487 1.2C84.7287 1.2 89.1387 1.89 92.6787 3.27C96.2187 4.59 98.8587 6.84 100.599 10.02C102.399 13.14 103.299 17.43 103.299 22.89C103.299 27.45 102.609 31.2 101.229 34.14C99.8487 37.02 97.7487 39.33 94.9287 41.07L105.909 66H86.3787L79.2687 44.94H76.3887V66H58.8387V13.53L53.8887 1.2H79.4487ZM76.3887 32.88C79.1487 32.88 81.1887 32.19 82.5087 30.81C83.8287 29.43 84.4887 27 84.4887 23.52C84.4887 20.76 84.2487 18.72 83.7687 17.4C83.2887 16.02 82.4487 15.09 81.2487 14.61C80.1087 14.13 78.4887 13.89 76.3887 13.89V32.88ZM127.329 57.27L125.619 66H106.809L119.769 9.3L117.699 0.479996H144.879L159.009 66H140.379L138.669 57.27H127.329ZM129.129 43.32H136.779L132.999 19.74L129.129 43.32ZM177.421 33.96C177.421 38.4 177.751 41.94 178.411 44.58C179.071 47.22 180.181 49.14 181.741 50.34C183.361 51.54 185.581 52.26 188.401 52.5V46.29L183.451 33.96H204.601V62.94C202.681 64.2 200.191 65.19 197.131 65.91C194.071 66.57 190.561 66.9 186.601 66.9C180.841 66.9 175.861 65.82 171.661 63.66C167.461 61.5 164.221 58.02 161.941 53.22C159.661 48.36 158.521 41.97 158.521 34.05C158.521 26.07 159.751 19.62 162.211 14.7C164.671 9.78 168.121 6.18 172.561 3.89999C177.001 1.62 182.161 0.479996 188.041 0.479996C190.141 0.479996 192.331 0.659995 194.611 1.01999C196.891 1.38 199.231 1.8 201.631 2.28L200.011 17.04C198.031 16.68 196.321 16.41 194.881 16.23C193.501 15.99 192.091 15.87 190.651 15.87C187.531 15.87 184.981 16.38 183.001 17.4C181.081 18.42 179.671 20.25 178.771 22.89C177.871 25.47 177.421 29.16 177.421 33.96ZM22.125 122.145C24.2783 122.145 25.8933 121.833 26.97 121.21C28.0467 120.587 28.585 119.567 28.585 118.15C28.585 117.187 28.33 116.422 27.82 115.855C27.31 115.288 26.4033 114.722 25.1 114.155L16.09 109.99C12.7467 108.46 10.1683 106.42 8.355 103.87C6.54167 101.32 5.635 97.6083 5.635 92.735C5.635 86.5017 7.25 81.855 10.48 78.795C13.7667 75.6783 19.1783 74.0917 26.715 74.035C29.8317 74.035 32.665 74.1767 35.215 74.46C37.765 74.7433 39.805 75.055 41.335 75.395C42.865 75.6783 43.63 75.82 43.63 75.82L41.93 89.505C41.93 89.505 41.2217 89.42 39.805 89.25C38.445 89.08 36.745 88.9383 34.705 88.825C32.665 88.655 30.6817 88.57 28.755 88.57C26.715 88.57 25.1567 88.8817 24.08 89.505C23.06 90.0717 22.55 91.1767 22.55 92.82C22.55 93.7267 22.9467 94.4917 23.74 95.115C24.5333 95.6817 25.6383 96.2767 27.055 96.9L34.28 100.045C38.1333 101.745 40.9383 103.87 42.695 106.42C44.4517 108.913 45.33 112.483 45.33 117.13C45.33 123.42 43.6867 128.265 40.4 131.665C37.1133 135.065 31.7017 136.793 24.165 136.85C20.425 136.85 16.94 136.595 13.71 136.085C10.48 135.632 7.61833 135.093 5.125 134.47L6.825 120.785C6.825 120.785 7.505 120.898 8.865 121.125C10.2817 121.352 12.1517 121.578 14.475 121.805C16.7983 122.032 19.3483 122.145 22.125 122.145ZM46.6621 74.8H87.3771L84.8271 88.4H67.9121V97.75H83.8071L81.2571 111.35H67.9121V122.4H87.9721L85.4221 136H51.3371V86.445L46.6621 74.8ZM111.515 74.8L123.5 109.735V74.8H139.65V136H119.76L108.88 104.21V136H92.7301V83.555L89.2451 74.8H111.515ZM184.589 88.4H173.369V136H156.709V88.4H144.299V74.8H187.139L184.589 88.4ZM211.666 74.8C216.653 74.8 220.818 75.4517 224.161 76.755C227.505 78.0017 229.998 80.1267 231.641 83.13C233.341 86.0767 234.191 90.1283 234.191 95.285C234.191 99.5917 233.54 103.133 232.236 105.91C230.933 108.63 228.95 110.812 226.286 112.455L236.656 136H218.211L211.496 116.11H208.776V136H192.201V86.445L187.526 74.8H211.666ZM208.776 104.72C211.383 104.72 213.31 104.068 214.556 102.765C215.803 101.462 216.426 99.1667 216.426 95.88C216.426 93.2733 216.2 91.3467 215.746 90.1C215.293 88.7967 214.5 87.9183 213.366 87.465C212.29 87.0117 210.76 86.785 208.776 86.785V104.72ZM256.887 127.755L255.272 136H237.507L249.747 82.45L247.792 74.12H273.462L286.807 136H269.212L267.597 127.755H256.887ZM258.587 114.58H265.812L262.242 92.31L258.587 114.58ZM291.044 74.8H307.619V121.55H326.404L323.769 136H291.044V74.8ZM325.568 74.8H366.283L363.733 88.4H346.818V97.75H362.713L360.163 111.35H346.818V122.4H366.878L364.328 136H330.243V86.445L325.568 74.8ZM4.6 174.6C4.6 167.027 5.48 161.08 7.24 156.76C9 152.387 11.64 149.293 15.16 147.48C18.7333 145.667 23.16 144.76 28.44 144.76C30.1467 144.76 32.0933 144.867 34.28 145.08C36.52 145.24 38.68 145.56 40.76 146.04V167.16H31.08L29.8 157.48C28.36 157.48 27.1067 157.667 26.04 158.04C25.0267 158.36 24.1733 159.08 23.48 160.2C22.7867 161.32 22.2533 163.027 21.88 165.32C21.56 167.613 21.4 170.68 21.4 174.52C21.4 178.68 21.8533 181.96 22.76 184.36C23.6667 186.707 25.0267 188.387 26.84 189.4C28.7067 190.36 31.08 190.84 33.96 190.84C35.24 190.84 36.4667 190.76 37.64 190.6C38.8133 190.44 40.0667 190.253 41.4 190.04V202.68C39.8533 203.053 37.9867 203.32 35.8 203.48C33.6133 203.693 31.6667 203.8 29.96 203.8C20.84 203.8 14.3333 201.347 10.44 196.44C6.54667 191.533 4.6 184.253 4.6 174.6ZM46.9906 145.4H62.5906V189.4H80.2706L77.7906 203H46.9906V145.4ZM84.2563 145.4H99.8563V203H84.2563V145.4ZM129.309 191.16L122.269 174.36V203H107.069V156.36L102.669 145.4H121.709L132.909 169.48L144.109 145.4H158.829V203H143.629V174.52L136.589 191.16H129.309ZM166.853 203V156.36L162.453 145.4H186.453C192.906 145.4 197.6 146.707 200.533 149.32C203.466 151.88 204.933 155.347 204.933 159.72C204.933 162.547 204.4 165.107 203.333 167.4C202.266 169.693 200.24 171.613 197.253 173.16V173.32C200.88 174.493 203.44 176.227 204.933 178.52C206.48 180.813 207.253 183.827 207.253 187.56C207.253 192.52 205.44 196.333 201.813 199C198.186 201.667 192.666 203 185.253 203H166.853ZM182.453 169.08H183.173C185.573 169.08 187.306 168.627 188.373 167.72C189.493 166.76 190.053 165.107 190.053 162.76C190.053 160.36 189.493 158.707 188.373 157.8C187.306 156.84 185.573 156.36 183.173 156.36H182.453V169.08ZM182.453 192.44H183.253C185.92 192.44 187.866 191.96 189.093 191C190.373 189.987 191.013 188.227 191.013 185.72C191.013 183.16 190.373 181.4 189.093 180.44C187.866 179.427 185.92 178.92 183.253 178.92H182.453V192.44ZM212.772 145.4H228.372V203H212.772V145.4ZM252.944 145.4L264.224 178.28V145.4H279.424V203H260.704L250.464 173.08V203H235.264V153.64L231.984 145.4H252.944ZM301.4 174.52C301.4 178.467 301.693 181.613 302.28 183.96C302.867 186.307 303.853 188.013 305.24 189.08C306.68 190.147 308.653 190.787 311.16 191V185.48L306.76 174.52H325.56V200.28C323.853 201.4 321.64 202.28 318.92 202.92C316.2 203.507 313.08 203.8 309.56 203.8C304.44 203.8 300.013 202.84 296.28 200.92C292.547 199 289.667 195.907 287.64 191.64C285.613 187.32 284.6 181.64 284.6 174.6C284.6 167.507 285.693 161.773 287.88 157.4C290.067 153.027 293.133 149.827 297.08 147.8C301.027 145.773 305.613 144.76 310.84 144.76C312.707 144.76 314.653 144.92 316.68 145.24C318.707 145.56 320.787 145.933 322.92 146.36L321.48 159.48C319.72 159.16 318.2 158.92 316.92 158.76C315.693 158.547 314.44 158.44 313.16 158.44C310.387 158.44 308.12 158.893 306.36 159.8C304.653 160.707 303.4 162.333 302.6 164.68C301.8 166.973 301.4 170.253 301.4 174.52ZM365.15 174.52C365.15 178.467 365.443 181.613 366.03 183.96C366.617 186.307 367.603 188.013 368.99 189.08C370.43 190.147 372.403 190.787 374.91 191V185.48L370.51 174.52H389.31V200.28C387.603 201.4 385.39 202.28 382.67 202.92C379.95 203.507 376.83 203.8 373.31 203.8C368.19 203.8 363.763 202.84 360.03 200.92C356.297 199 353.417 195.907 351.39 191.64C349.363 187.32 348.35 181.64 348.35 174.6C348.35 167.507 349.443 161.773 351.63 157.4C353.817 153.027 356.883 149.827 360.83 147.8C364.777 145.773 369.363 144.76 374.59 144.76C376.457 144.76 378.403 144.92 380.43 145.24C382.457 145.56 384.537 145.933 386.67 146.36L385.23 159.48C383.47 159.16 381.95 158.92 380.67 158.76C379.443 158.547 378.19 158.44 376.91 158.44C374.137 158.44 371.87 158.893 370.11 159.8C368.403 160.707 367.15 162.333 366.35 164.68C365.55 166.973 365.15 170.253 365.15 174.52ZM403.898 185.4L389.338 145.4H406.138L410.778 162.36L412.058 169.4H412.218L413.498 162.36L418.138 145.4H434.137L419.498 185.4V203H403.898V185.4ZM460.403 191.16L453.363 174.36V203H438.163V156.36L433.762 145.4H452.803L464.003 169.48L475.203 145.4H489.923V203H474.723V174.52L467.683 191.16H460.403Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_8_4"
              x="0.599998"
              y="0.479996"
              width="493.323"
              height="211.32"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_8_4"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_8_4"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="bannerImage">
        <img src={TensionBoard} alt="Tension Board" className="image" />{" "}
      </div>
    </div>
  );
};

export default HomeBanner;
