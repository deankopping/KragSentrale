import { Link } from "react-router-dom";

const WaiverComplete = () => {
	return (
		<div style={{ textAlign: "center", marginTop: "2rem" }}>
			<h2>Waiver Completed!</h2>
			<p>Thanks for completing the waiver.</p>
			<Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
				Back to Kragsentrale homepage
			</Link>
		</div>
	);
};

export default WaiverComplete;
