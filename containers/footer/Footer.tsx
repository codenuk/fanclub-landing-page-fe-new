import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ContentWrapper, Logo } from "../../components";
import { useTranslation } from "../../hooks";
import commoni18n from "../../i18n/common.i18n";
import {
  FooterWrapper,
  InfoItemSection,
  InfoSection,
  LanguageLink,
  SocialList,
} from "./footer.styles";
import { useRouter } from "next/router";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const theme = useTheme();
  const isLaptopUp = useMediaQuery(theme.breakpoints.up("md"));
  const { translate } = useTranslation(commoni18n);
  const router = useRouter();

  return (
    <FooterWrapper>
      <ContentWrapper
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        gap={5}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <InfoSection>
          <InfoItemSection>
            <Logo />
            <Typography variant="body2">
              {translate("CREATE_BY_DATABILITY")}
            </Typography>
            {isLaptopUp && (
              <Typography variant="body1">{translate("SUBINFO_1")}</Typography>
            )}
          </InfoItemSection>
        </InfoSection>
        <InfoSection>
          <InfoItemSection>
            <Typography variant="h5" paddingBottom={1}>
              {translate("CONTACT")}
            </Typography>
            {/* {isLaptopUp && (
              <Typography variant="body1">064-493-6441</Typography>
            )} */}
            <Typography variant="body1">admin@fandom.co.th</Typography>
            <SocialList>
              <Image
                src="/images/facebook-icon.svg"
                width="20"
                height="20"
                alt="facebook-icon"
              />
              <Image
                src="/images/line-icon.svg"
                width="20"
                height="20"
                alt="facebook-icon"
              />
              <Image
                src="/images/youtube-icon.svg"
                width="20"
                height="20"
                alt="facebook-icon"
              />
            </SocialList>
          </InfoItemSection>
        </InfoSection>
        {isLaptopUp && (
          <InfoSection>
            <InfoItemSection>
              <Typography variant="h5" paddingBottom={1}>
                {translate("CATEGORIES")}
              </Typography>
              <Typography
                variant="body1"
                onClick={() => router.push("/")}
                style={{ cursor: "pointer" }}
              >
                Home
              </Typography>
              <Typography
                variant="body1"
                onClick={() => router.push("/about-us")}
                style={{ cursor: "pointer" }}
              >
                About us
              </Typography>
              <Typography
                variant="body1"
                onClick={() => router.push("/privacy-policy")}
                style={{ cursor: "pointer" }}
              >
                Privacy policy
              </Typography>
            </InfoItemSection>
          </InfoSection>
        )}
        {/* <InfoSection>
          <InfoItemSection>
            <Typography variant="h5" paddingBottom={1}>
              {translate("LANGUAGE")}
            </Typography>
            <Typography variant="body1">
              <LanguageLink href="/th">ภาษาไทย</LanguageLink>
            </Typography>
            <Typography variant="body1">
              <LanguageLink href="/en">English</LanguageLink>
            </Typography>
          </InfoItemSection>
        </InfoSection> */}
        {isLaptopUp && (
          <InfoSection>
            <InfoItemSection>
              <Typography variant="h5" paddingBottom={1}>
                {translate("APPLICATION")}
              </Typography>
              <Image
                src="/images/ios-download.png"
                width="227"
                height="69"
                layout="fixed"
                alt="facebook-icon"
              />
              <Image
                src="/images/android-download.png"
                width="227"
                height="69"
                layout="fixed"
                alt="facebook-icon"
              />
            </InfoItemSection>
          </InfoSection>
        )}
      </ContentWrapper>
    </FooterWrapper>
  );
};

Footer.defaultProps = {};

export default Footer;
