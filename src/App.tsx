import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import MasonryGrid from "./MasonaryGrid";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<MasonryGrid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
