import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles/tncs.module.css"; // adjust path as needed

export default function TermsAndConditions() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className={`${styles.sectionContainer} ${styles.termsSection} ${styles.termsParagraph}`}>
      <h1>Terms, Refunds, and Privacy</h1>

      <section id="terms-of-use">
        <h2>Terms of Use</h2>
        <p>All climbers must sign the required <a href="https://waiver.smartwaiver.com/w/namxoiwk5vpgif6j9adqik/web/">liability waiver</a> before using our gym. The waiver outlines the rules, responsibilities, and risks associated with climbing. By entering the gym, you confirm that you have read, understood, and agreed to the waiver.</p>
				<p>Members are granted 24/7 access to the climbing facility. Kragsentrale reserve the right to revoke access to any member if they see fit.</p>
				<p>Only use the training equipment as intended. Report any hazards to staff members immediately. Minors must have an accompanied adult at all times.</p>
      </section>

			<section id="refund-policy">
        <h2>Refund Policy</h2>
        <p>Refunds are considered on a case-by-case basis. Note that if you have purchased a time-pass or a session-pass bundle, we are unlikely to grant a refund unless you are able to prove that you are completely unable to use the product. If you believe you are entitled to a refund, please feel free to contact us at <a href="mailto:info@kragsentrale.co.za">info@kragsentrale.co.za</a>.</p>
      </section>

      <section id="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>We respect your privacy. Your data is used solely for managing memberships and access, and is handled in accordance with applicable privacy laws. Marketing emails or information emails are never sent out without explicit consent.</p>
      </section>

      <section id="contact-details">
        <h2>Contact Details</h2>
        <p>
          Kragsentrale<br />
          48 Milton Road, Observatory, Cape Town, South Africa<br />
          Email: info@kragsentrale.co.za
        </p>
      </section>
    </div>
  );
}
