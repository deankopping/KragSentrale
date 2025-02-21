import "../styles/AboutUs.css";

import { Typewriter } from "./typewriter.tsx";
const AboutUs = () => {
  return (
    <div className="sectionContainer" style={{ justifyContent: "start" }}>
      <h2>ABOUT US</h2>
      <div className="aboutContent">
        <Typewriter
          text={`attempt to gain access if someone is available to let them in. In such
        cases, we operate on an *honesty system* for payment. CCTV cameras are
        installed on the premises to ensure accountability, so please ensure to
        make the necessary payment when accessing the gym.  on an *honesty
        system* for payment. CCTV cameras are installed on the premises to
        ensure accountability, so please ensure to make the necessary payment
        when accessing the gym.`}
          staggerValue={0.01}
        ></Typewriter>
      </div>
    </div>
  );
};

export default AboutUs;
