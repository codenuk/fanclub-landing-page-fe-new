import { styled } from "@mui/material";

export const FooterWrapper = styled("footer")`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};

  border-top: solid 1px ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ theme }) => theme.spacing(4, 2)};
`;

export const InfoSection = styled("section")`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;

  gap: ${({ theme }) => theme.spacing(2)};
`;

export const InfoItemSection = styled("section")`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

export const SocialList = styled("div")`
  margin-top: ${({ theme }) => theme.spacing(1)};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const LanguageLink = styled("a")`
  color: ${({ theme }) => theme.palette.common.white};
`;
