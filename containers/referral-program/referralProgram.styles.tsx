import { Card, styled, SxProps } from "@mui/material";

export const ReferralProgramWrapper = styled(Card)`
  padding: ${({ theme }) => theme.spacing(4)};

  gap: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  max-width: 704px;
  min-height: 500px;
`;

export const ReferralProgramBox = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CouponWrapper = styled("div")`
  max-width: 360px;
  width: 100%;
`;

export const inviteFriendStyles: SxProps = {
  height: 54,
  background:
    "linear-gradient(176.36deg, #FC01A2 -112.26%, #8E25F7 130.06%, #00E4E1 293.13%);",
  borderRadius: "57.5px",
  maxWidth: "386px",
};
