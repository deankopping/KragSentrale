import "./index.css";
import "./styles/HomeBanner.css";
import TensionBoard from "./assets/TensionBoard.jpg"; // Import the image
import { KragSvg, ClimbingSvg, GymSvg, SentraleSvg } from "./assets/svgs";

const HomeBanner = () => {
  return (
    <>
      <div className="homeBannerContainer">
        <div className="homeBanner">
          <div className="homeBannerText">
            <h1 className="krag">KRAG</h1>
            <h1 className="sentrale">SENTRALE</h1>
          </div>
        </div>
        {/* <h1 className="climbing">CLIMBING GYM</h1> */}
      </div>
      <div className="bannerImageMobile">
        <img src={TensionBoard} alt="Tension Board" className="image" />{" "}
      </div>
    </>
  );
};

export default HomeBanner;
