import { useEffect } from "react";

const Abalone= () => {
  useEffect(() => {
    // Redirect the browser to the static HTML
    window.location.href = "/abalone/abalone.html";
  }, []);

  return null; // nothing rendered by React
};

export default Abalone;
