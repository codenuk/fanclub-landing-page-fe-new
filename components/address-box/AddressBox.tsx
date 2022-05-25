import React from "react";
import { AddressBoxWrapper } from "./addressBox.styles";

type AddressBoxProps = {
  address: string;
};

const AddressBox: React.FC<AddressBoxProps> = ({ address }) => {
  return <AddressBoxWrapper>{address}</AddressBoxWrapper>;
};

AddressBox.defaultProps = {};

export default AddressBox;
