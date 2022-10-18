import React from "react";

export default function Cell(props) {
  const { value } = props;
  const valueToDisplay = value ? value : "";
  const cellStyle =
    "w-14 h-14 py-2 px-4 border-2 rounded flex justify-center content-center font-bold text-2xl";
  return <div className={cellStyle}>{valueToDisplay}</div>;
}
