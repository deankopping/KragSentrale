import { useMediaQuery } from "react-responsive";

const sessionPassData = {
  Demographic: [
    "Session Pass 10 Day",
    "Session Pass 30 Day",
  ],
  "0 - 18": ["R500", "R1350"],
  "19 - ∞": ["R650", "R1750"],
  "University Student": ["R480", "R1300"],
};

const timePassData = {
  Demographic: [
    "Time Pass 30 days",
    "Time Pass 90 days",
    "Time Pass 365 days",
  ],
  "0 - 18": ["R430", "R1160", "R4100"],
  "19 - ∞": ["R550", "R1480", "R5270"],
  "University Student": ["R420", "R1130", "R4000"],
};

const dayPassData = {
  Demographic: ["Day Pass 1 Day"],
  "0 - 18": ["R75"],
  "19 - ∞": ["R99"],
  "University Student": ["R75"],
};

export enum PassTypes {
  "dayPass",
  "sessionPass",
  "timePass",
}

const TableComponent = ({ passType }: { passType: PassTypes }) => {
  let headings;
  let rows;
  let description;
  let heading;

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  switch (passType) {
    case PassTypes.sessionPass:
      headings = Object.keys(sessionPassData);
      rows = Object.values(sessionPassData);
      description =
        "A single session pass grants you access to the gym for 12h from when you use it. When you have an active time pass they are not used. These passes expire after 3 months.";
      //heading = "Session Pass Pricing";
      heading = "Coming soon...";
      break;

    case PassTypes.timePass:
      headings = Object.keys(timePassData);
      rows = Object.values(timePassData);
      description =
        "When purchasing a Time Pass, you select a date in the future for when the pass will expire. This is the typical month pass or year pass you see at other gyms.";
      heading = "Time Pass Pricing";
      break;

    case PassTypes.dayPass:
      headings = Object.keys(dayPassData);
      rows = Object.values(dayPassData);
      description =
        "As a day customer you can only purchase a single session pass.";
      heading = "Day Pass Pricing";
      break;
  }

  return (
    <div>
      <h3 style={{ marginTop: "2rem" }}>{heading}</h3>
      <p>{description}</p>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
          marginBottom: "3rem",
        }}
      >
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th
                key={index}
                style={{
                  padding: "8px",
                  textAlign: "left",
                  border: "1px solid #ccc",
                  backgroundColor: "#f4f4f4",
                }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows[0].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {rows.map((columnData, columnIndex) => (
                <td
                  key={columnIndex}
                  style={{
                    padding: isMobile ? "2px" : "8px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    fontSize: isMobile ? "smaller" : "medium",
                  }}
                >
                  {columnData[rowIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
