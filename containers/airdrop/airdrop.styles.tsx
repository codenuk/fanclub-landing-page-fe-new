import { Button, styled, Typography } from "@mui/material";

export const AirdropWrapper = styled("section")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image text";
  justify-content: center;
  align-items: center;

  min-height: calc(
    100vh -
      ${({ theme }) =>
        theme.customTheme.constants.NAVBAR_HEIGHT +
        theme.customTheme.constants.FOOTER_HEIGHT}px
  );

  gap: ${({ theme }) => theme.spacing(12)};
  padding: ${({ theme }) => theme.spacing(10, 6)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    grid-template-areas: "text" "image";
    padding: ${({ theme }) => theme.spacing(0)};
  }
`;

export const AirdropImageWrapper = styled("section")`
  grid-area: image;
  width: 100%;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const AirdropTextWrapper = styled("section")`
  grid-area: text;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: ${({ theme }) => theme.spacing(4)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const AirdropDescription = styled("li")`
  max-width: 569px;

  font-weight: 400;
  font-size: 24px;
`;

export const AirdropDescriptionGroup = styled("ul")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const RecieveAirdropButton = styled(Button)`
  max-width: 327px;
  height: 62px;
  font-size: 24px;
  border-radius: 50px;
  align-self: flex-start;

  background: linear-gradient(
    90deg,
    #fc01a2 -19.13%,
    #8e25f7 93.91%,
    #00e4e1 126.48%
  );

  ${({ theme }) => theme.breakpoints.down("sm")} {
    align-self: center;
  }
`;

export const EarnForm = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.spacing(4)};
`;
