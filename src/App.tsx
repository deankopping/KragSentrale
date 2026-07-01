import EmailVerified from "./EmailVerified";
import HomePage from "./HomePage";
import MasonryGrid from "./MasonaryGrid";
import Redirect from "./Redirect";
import Resistance from "./Resistance";
import Abalone from "./Abalone";
import TermsAndConditions from "./TermsAndConditions";
import WaiverComplete from "./WaiverComplete";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<MasonryGrid />} />
      <Route path="/abalone" element={<Abalone />} />
      <Route path="/resistance" element={<Resistance />} />
      <Route path="/products" element={<Redirect to="https://paystack.shop/kragsentrale" />} />
      <Route path="/waiver" element={<Redirect to="https://waiver.smartwaiver.com/w/namxoiwk5vpgif6j9adqik/web/" />} />
      <Route path="/waiver/complete" element={<WaiverComplete />} />
      <Route path="/waiver/email-verified" element={<EmailVerified />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
