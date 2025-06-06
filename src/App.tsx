import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MasonryGrid from "./MasonaryGrid";
import WaiverComplete from "./WaiverComplete";
import EmailVerified from "./EmailVerified";
import Redirect from "./Redirect";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<MasonryGrid />} />
				<Route path="/waiver" element={<Redirect to="https://waiver.smartwaiver.com/w/namxoiwk5vpgif6j9adqik/web/" />} />
				<Route path="/voltage" element={<Redirect to="https://docs.google.com/forms/d/e/1FAIpQLSd7N8U1y-MaZQL97rEluGZsdzSLo53NZ2R-nfL_Iyse95DscA/viewform?usp=dialog" />} />
				<Route path="/waiver/complete" element={<WaiverComplete />} />
				<Route path="/waiver/email-verified" element={<EmailVerified />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
