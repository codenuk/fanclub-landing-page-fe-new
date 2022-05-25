import { styled, Typography } from "@mui/material";

export const AboutUsWrapper = styled("section")`
  min-height: calc(
    100vh -
      ${({ theme }) =>
        theme.customTheme.constants.NAVBAR_HEIGHT +
        theme.customTheme.constants.FOOTER_HEIGHT}px
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(10, 0)};
`;

export const Description = styled(Typography)`
  text-align: center;

  font-weight: 300;
  max-width: 1000px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export const AboutList = styled("section")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const AboutUsContainer = styled("div")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  width: 100%;
`;
