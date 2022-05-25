import Image from "next/image";
import React from "react";

import {
  AppSpecCardWrapper,
  SpecDescription,
  SpecHeader,
} from "./appSecCard.styles";

type AppSpecCardProps = {
  logoSrc: string;
  title: string;
  description: string;
  style?: any;
};

const AppSpecCard: React.FC<AppSpecCardProps> = ({
  logoSrc,
  title,
  description,
  style,
}) => {
  return (
    <AppSpecCardWrapper style={style} elevation={15}>
      <Image src={logoSrc} width="100" height="100" alt="spec-logo" />
      <SpecHeader variant="h5">{title}</SpecHeader>
      <SpecDescription variant="body1">{description}</SpecDescription>
    </AppSpecCardWrapper>
  );
};

AppSpecCard.defaultProps = {};

export default AppSpecCard;
