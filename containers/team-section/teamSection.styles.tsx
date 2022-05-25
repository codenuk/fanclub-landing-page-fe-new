import { styled } from "@mui/material";

export const TeamSectionWrapper = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const TeamMemberList = styled("section")`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(10)};
`;
