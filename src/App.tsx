import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./HomePage";
import MasonryGrid from "./MasonaryGrid";

const App = () => {
	const Redirect = ({ to }: { to: string }) => {
		useEffect(() => { window.location.href = to; }, [to]);
		return <p>Redirecting...</p>;
	};

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<MasonryGrid />} />
        {/* Redirect /waiver to the external waiver URL */}
				<Route path="/waiver" element={<Redirect to="https://waiver.smartwaiver.com/w/namxoiwk5vpgif6j9adqik/web/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
