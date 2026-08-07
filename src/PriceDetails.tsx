import { useMediaQuery } from "react-responsive";

type Product =
  | string
  | {
      price: string;
      href: string;
    };

const renderProductCell = (cell: Product) => {
  if (typeof cell === "string") {
    return cell;
  }

  return (
    <a
      href={cell.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#89b4fa",
        textDecoration: "underline",
      }}
    >
      {cell.price}
    </a>
  );
};

const punchPassData = {
  "Pass variant": [
    "Punch Pass 10 Day",
    "Punch Pass 30 Day",
  ],
  "Student": [
      {
          price: "R500",
          href: "https://paystack.shop/kragsentrale?product=10-sessions-student-jgpaxa"
      },
          "R1350"
  ],
  "Adult": [
      {
          price: "R650",
          href: "https://paystack.shop/kragsentrale?product=10-sessions-adult-rpnpuw"
      },
      "R1750"
  ],
};

const timePassData = {
    "Pass variant": [
        "Time Pass 30 days",
        "Time Pass 90 days",
        "Time Pass 365 days",
    ],
    "Student": [
        {
            price: "R420",
            href: "https://paystack.shop/kragsentrale?product=30-day-student-pass-stcbmb"
        },
        "R1160",
        "R4100"
    ],
    "Adult": [
        {
            price:"R550",
            href: "https://paystack.shop/kragsentrale?product=30-day-adult-pass-ndhdut"
        },
        "R1480",
        "R5270"
    ],
};

const dayPassData = {
  "Pass variant": ["Day Pass 1 Day"],
  "Student": [
      {
          price: "R75",
          href: "https://paystack.shop/kragsentrale?product=student-day-pass-kzwlim"
      },
  ],
  "Adult": [
      {
          price: "R99",
          href: "https://paystack.shop/kragsentrale?product=adult-day-pass-fwcrho"
      },
  ],
};

export enum PassTypes {
  "dayPass",
  "punchPass",
  "timePass",
}

const TableComponent = ({ passType }: { passType: PassTypes }) => {
  let headings;
  let rows;
  let description;
  let heading;

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  switch (passType) {
    case PassTypes.punchPass:
      headings = Object.keys(punchPassData);
      rows = Object.values(punchPassData);
      description =
          "Using a punch pass grants you access to the gym for 12h and deducts one session. These passes expire after 90 days.";
      heading = "Punch Pass Pricing";
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
        "The day pass is the standard day pass you see at other gyms.";
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
                  backgroundColor: "#45475A",
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
                  {renderProductCell(columnData[rowIndex])}
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
