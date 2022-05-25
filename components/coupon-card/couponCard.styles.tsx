import { Button, styled } from "@mui/material";

export const CouponCardWrapper = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  background: url("/images/coupon-card.png");
  background-size: 100% 95%;
  background-repeat: no-repeat;
`;

export const CouponContainer = styled("section")`
  position: relative;
  background: url("/images/coupon-card-inner-line.png");
  width: 100%;
  min-height: 400px;
  background-size: 84% 81%;
  background-repeat: no-repeat;
  background-position: 49% 26%;
  background-origin: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const CopyButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.secondary.main};
  max-width: 121px !important;
  height: 40px !important;
  border-radius: 25px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const SocialGroup = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const CodeGroup = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 54px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
