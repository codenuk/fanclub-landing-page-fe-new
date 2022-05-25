import { styled } from "@mui/material";

export const AboutItemWrapper = styled("div")`
  padding: ${({ theme }) => theme.spacing(4)};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 400px;
  width: 100%;
  background: #1a053f;
  color: ${({ theme }) => theme.palette.common.white};
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ImageBox = styled("div")`
  width: 101px;
  height: 101px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    #fc01a2 -19.13%,
    #8e25f7 93.91%,
    #00e4e1 126.48%
  );
`;
