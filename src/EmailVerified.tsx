import { Link } from "react-router-dom";

const EmailVerified = () => {
	return (
		<div style={{ textAlign: "center", marginTop: "2rem" }}>
			<h2>Your email has been verified!</h2>
			<Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
				Back to Kragsentrale homepage
			</Link>
		</div>
	);
};

export default EmailVerified;
