import { Typography } from "@mui/material";
import React from "react";
import { AboutItem, ContentWrapper, SlideUp } from "../../components";
import { useTranslation } from "../../hooks";
import aboutUsPagei18n from "../../i18n/about-us.i18n";
import {
  AboutList,
  AboutUsContainer,
  AboutUsWrapper,
  Description,
} from "./aboutUs.styles";

const mockAbout = [
  {
    imgUrl: "/images/nft.svg",
    title: "NFTs",
    description: `A non-fungible token is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded. `,
  },
  {
    imgUrl: "/images/artist.svg",
    title: "Artists",
    description: `One-stop destination for ultra-rare collectibles from leading creators and brands. Get access to genesis NFT collections by famed artists.`,
  },
  {
    imgUrl: "/images/community.svg",
    title: "Community",
    description: `A community is a social unit with commonality such as norms, religion, values, customs, or identity`,
  },
];

type AboutUsProps = {};

const AboutUs: React.FC<AboutUsProps> = () => {
  const { translate } = useTranslation(aboutUsPagei18n);
  return (
    <AboutUsContainer>
      <SlideUp>
        <ContentWrapper>
          <AboutUsWrapper>
            <Typography variant="h4">{translate("ABOUT_US")}</Typography>
            <Description variant="h5">{translate("DESCRIPTION")}</Description>
            <AboutList>
              {mockAbout.map((about, index) => (
                <AboutItem
                  key={index}
                  imgSrc={about.imgUrl}
                  title={about.title}
                  description={about.description}
                />
              ))}
            </AboutList>
          </AboutUsWrapper>
        </ContentWrapper>
      </SlideUp>
    </AboutUsContainer>
  );
};

AboutUs.defaultProps = {};

export default AboutUs;
