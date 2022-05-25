import { Box, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { useCallback, useMemo } from "react";
import {
  isIncludeLowerCase,
  isIncludeNumber,
  isIncludeSpace,
  isIncludeSpecialCharacter,
  isIncludeUpperCase,
} from "../../utils/password";

type PasswordRequirementProps = {
  password: string;
};

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({
  password,
}) => {
  const statusColor = useCallback(
    (isSuccess: boolean) => (theme: Theme) =>
      isSuccess ? theme.palette.success.main : theme.palette.error.main,
    []
  );

  const is8Characters = useMemo(() => password.length >= 8, [password]);
  const isAtLeastAnUpperCase = useMemo(
    () => isIncludeUpperCase(password),
    [password]
  );
  const isAtLeastALowerCase = useMemo(
    () => isIncludeLowerCase(password),
    [password]
  );
  const isAtLeastANumber = useMemo(() => isIncludeNumber(password), [password]);
  const isAtLeastSpecialCharacters = useMemo(
    () => isIncludeSpecialCharacter(password),
    [password]
  );
  const isNoSpace = useMemo(() => !isIncludeSpace(password), [password]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Requirement:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 2,
          padding: (theme) => theme.spacing(0, 3),
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: statusColor(is8Characters),
          }}
        >
          8 characters
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: statusColor(isAtLeastAnUpperCase),
          }}
        >
          1 uppercase
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: statusColor(isAtLeastALowerCase),
          }}
        >
          1 lowercase
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: statusColor(isAtLeastANumber),
          }}
        >
          1 number
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: statusColor(isAtLeastSpecialCharacters),
          }}
        >
          1 symbol
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: statusColor(isNoSpace),
          }}
        >
          No spaces
        </Typography>
      </Box>
    </Box>
  );
};

PasswordRequirement.defaultProps = {};

export default PasswordRequirement;
