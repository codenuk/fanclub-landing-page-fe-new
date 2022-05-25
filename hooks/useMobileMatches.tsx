import { useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";

function useMobileMatches(styles?: any) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const animatedStyles = useMemo<any>(() => {
    if (Array.isArray(styles)) {
      return !matches ? styles : [];
    }
    return !matches ? styles : {};
  }, [matches, styles]);

  return {
    isMobile: matches,
    animatedStyles,
  };
}

export default useMobileMatches;
