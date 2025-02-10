import "./index.css";
import "./styles/HomeBanner.css";
import AboutUs from "./AboutUs";

const HomeBanner = () => {
  return (
    <>
      <div className="homeBannerContainer">
        <div className="homeBanner">
          <div className="homeBannerText">
            <div className="mainHeading">
              <h1 className="krag">KRAG</h1>
              <h1 className="sentrale">SENTRALE</h1>
            </div>

            <div className="aboutUs">
              <AboutUs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
