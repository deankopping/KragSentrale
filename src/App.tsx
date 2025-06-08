import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MasonryGrid from "./MasonaryGrid";
import WaiverComplete from "./WaiverComplete";
import Voltage from "./Voltage";
import EmailVerified from "./EmailVerified";
import Redirect from "./Redirect";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<MasonryGrid />} />
        <Route path="/voltage" element={<Voltage />} />
				<Route path="/waiver" element={<Redirect to="https://waiver.smartwaiver.com/w/namxoiwk5vpgif6j9adqik/web/" />} />
				<Route path="/waiver/complete" element={<WaiverComplete />} />
				<Route path="/waiver/email-verified" element={<EmailVerified />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
