import React from "react";
import "./styles.css";

export enum TableStyle {
  StyleOne = "style-one",
  StyleTwo = "style-two",
}

function Table({
  title,
  data,
  style,
}: {
  title: string;
  data: any;
  style: TableStyle;
}) {
  const { priceBands, tiers } = data;

  return (
    <div>
      <h2>{title}</h2>
      <table className={`table table--${style}`}>
        {/* <caption>{title}</caption> */}
        <thead>
          <tr>
            {priceBands.map((priceBand: any) => (
              <th key={priceBand} scope="col">
                {priceBand}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tiers.map(
            (tier: { tier: any; prices: { [x: string]: any } }, index: any) => {
              return (
                <tr row-label={tier.tier} key={tier.tier}>
                  {Object.keys(priceBands).map((header, index) => {
                    return (
                      <td
                        row-label={tier.tier}
                        data-th={priceBands[header]}
                        key={index}>
                        <span>{tier.prices[header]}</span>
                      </td>
                    );
                  })}
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
