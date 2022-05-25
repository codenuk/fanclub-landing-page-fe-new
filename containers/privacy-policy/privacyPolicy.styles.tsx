import { styled, Typography } from "@mui/material";

export const PrivacyPolicyContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  align-self: stretch;
`;

export const PrivacyPolicyWrapper = styled("section")`
  min-height: calc(
    100vh -
      ${({ theme }) =>
        theme.customTheme.constants.NAVBAR_HEIGHT +
        theme.customTheme.constants.FOOTER_HEIGHT}px
  );

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(10, 0)};
`;

export const Description = styled(Typography)`
  font-weight: 300;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export const ListBullet = styled("ul")`
  margin: 0;
`;

export const ItemBullet = styled("li")`
  font-size: 20px;
  font-weight: 300 !important;
`;