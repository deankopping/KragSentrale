import { useEffect } from "react";

const Redirect = ({ to }: { to: string }) => {
	useEffect(() => { window.location.href = to; }, [to]);
	return <p>Redirecting...</p>;
};

export default Redirect;
