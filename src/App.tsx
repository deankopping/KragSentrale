import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import MasonryGrid from "./MasonaryGrid";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<MasonryGrid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
