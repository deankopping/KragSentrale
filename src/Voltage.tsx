const files = [
  "boulders.html",
  "calculator.html",
  "mens.html",
  "womens.html",
];

const Voltage = () => {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      {files.map((filename) => {
        const label = filename.replace(".html", "").toUpperCase();
        const url = `${import.meta.env.BASE_URL}voltage/${filename}`;

        return (
          <a
            key={filename}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "1.5rem",
              textAlign: "center",
              backgroundColor: "#1e1e2e",
              color: "#cdd6f4",
              borderRadius: "12px",
              textDecoration: "none",
              fontFamily: "'JetBrainsMono Nerd Font', monospace",
              fontWeight: "bold",
              fontSize: "1rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget.style.transform = "scale(1.02)");
              (e.currentTarget.style.boxShadow = "0 6px 14px rgba(0, 0, 0, 0.3)");
            }}
            onMouseLeave={(e) => {
              (e.currentTarget.style.transform = "scale(1)");
              (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)");
            }}
          >
            {label}
          </a>
        );
      })}
    </main>
  );
};

export default Voltage;
