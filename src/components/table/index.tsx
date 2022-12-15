import React from "react";
import "./styles.css";

export enum TableStyle {
  StyleOne = "style-one",
  StyleTwo = "style-two",
}
interface DataType {
  priceBands: string[];
  tiers: {
    tier: string;
    prices: string[];
  }[];
}

function Table({
  title,
  data,
  style,
}: {
  title: string;
  data: DataType;
  style: TableStyle;
}) {
  const { priceBands, tiers } = data;

  return (
    <div>
      <table className={`table table--${style}`}>
        <caption>{title}</caption>
        <thead>
          <tr>
            {priceBands.map((priceBand: string) => (
              <th key={priceBand} scope="col">
                {priceBand}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier, index: number) => {
            return (
              <tr row-label={tier.tier} key={index}>
                {Object.keys(priceBands).map(
                  (header: string, index: number) => {
                    return (
                      <td
                        row-label={tier.tier}
                        data-th={priceBands[header]}
                        key={index}>
                        <span>{tier.prices[header]}</span>
                      </td>
                    );
                  }
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
