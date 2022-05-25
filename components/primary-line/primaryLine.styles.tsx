import { styled } from "@mui/material";

export const PrimaryLineBody = styled<any>("div", {
  shouldForwardProp: (prop) => prop !== "width",
})`
  background: linear-gradient(
    90deg,
    #fc01a2 18.07%,
    #8e25f7 71.19%,
    #00e4e1 100.01%
  );

  height: 5px;
  width: ${({ width }) => width ?? "100%"};
  border-radius: 25px;
`;
