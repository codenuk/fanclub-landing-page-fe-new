import React from "react";
import { PrimaryLineBody } from "./primaryLine.styles";

type PrimaryLineProps = {
  width?: string;
};

const PrimaryLine: React.FC<PrimaryLineProps> = ({ width }) => {
  return <PrimaryLineBody width={width} />;
};

PrimaryLine.defaultProps = {
  width: "100%",
};

export default PrimaryLine;
