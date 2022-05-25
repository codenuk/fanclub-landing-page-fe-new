import { Typography } from "@mui/material";
import React from "react";
import { ContentWrapper } from "../../components";
import { useTranslation } from "../../hooks";
import privacyPolicyPagei18n from "../../i18n/privacy-policy.i18n";
import {
  PrivacyPolicyContainer,
  PrivacyPolicyWrapper,
  Description,
  ListBullet,
  ItemBullet,
} from "./privacyPolicy.styles";

type PrivacyPolicyProps = {};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  const { translate } = useTranslation(privacyPolicyPagei18n);
  return (
    <PrivacyPolicyContainer>
      <ContentWrapper>
        <PrivacyPolicyWrapper>
          <Typography variant="h4">{translate("TITLE")}</Typography>
          <Description variant="h6">{translate("DESCRIPTION")}</Description>

          <Typography variant="h5">{translate("COLLECTION")}</Typography>
          <Description variant="h6">
            {translate("COLLECTION_DESCRIPTION")}
          </Description>
          <ListBullet>
            <ItemBullet>{translate("COLLECTION_1")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_2")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_3")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_4")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_5")}</ItemBullet>
          </ListBullet>

          <Typography variant="h5">{translate("TYPES_OF_DATA")}</Typography>
          <Description variant="h6">{translate("TYPES_OF_DATA_1")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_2")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_3")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_4")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_5")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_6")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_7")}</Description>
          {/* <Description variant="h6">{translate("TYPES_OF_DATA_8")}</Description>

          <ListBullet>
            <ItemBullet>{translate("COLLECTION_6")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_7")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_8")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_9")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_10")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_11")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_12")}</ItemBullet>
          </ListBullet> */}

          <Description variant="h6">{translate("TYPES_OF_DATA_9")}</Description>

          <Typography variant="h5">{translate("CHILDREN")}</Typography>
          <Description variant="h6">
            {translate("CHILDREN_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("STORAGE_OF_DATA")}</Typography>
          <Description variant="h6">
            {translate("STORAGE_OF_DATA_DESCRIPTION_1")}
          </Description>
          <Description variant="h6">
            {translate("STORAGE_OF_DATA_DESCRIPTION_2")}
          </Description>
          <ListBullet>
            <ItemBullet>{translate("STORAGE_OF_DATA_TYPE_1")}</ItemBullet>
            <ItemBullet>{translate("STORAGE_OF_DATA_TYPE_2")}</ItemBullet>
            <ItemBullet>{translate("STORAGE_OF_DATA_TYPE_3")}</ItemBullet>
            <ItemBullet>{translate("STORAGE_OF_DATA_TYPE_4")}</ItemBullet>
          </ListBullet>

          <Typography variant="h5">{translate("USE_OF_DATA")}</Typography>
          <Description variant="h6">
            {translate("USE_OF_DATA_DESCRIPTION")}
          </Description>
          <ListBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_1")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_2")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_3")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_4")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_5")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_6")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_7")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_8")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_9")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_10")}</ItemBullet>
          </ListBullet>

          <Typography variant="h5">
            {translate("DISCLOSURE_OF_PERSONAL_DATA")}
          </Typography>
          <Description variant="h6">
            {translate("DISCLOSURE_OF_PERSONAL_DATA_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("ORGANIZATION")}</Typography>
          <Description variant="h6">
            {translate("ORGANIZATION_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("SERVICE_PROVIDERS")}</Typography>
          <Description variant="h6">
            {translate("SERVICE_PROVIDERS_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("BUSINESS_PARTNERS")}</Typography>
          <Description variant="h6">
            {translate("BUSINESS_PARTNERS_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("DATA_RETENTION")}</Typography>
          <Description variant="h6">
            {translate("DATA_RETENTION_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("DATA_SUBJECT_RIGHTS")}
          </Typography>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_1")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_2")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_3")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_4")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_5")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_6")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_7")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_8")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_9")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_10")}
          </Description>

          <Typography variant="h5">{translate("COOKIES")}</Typography>
          <Description variant="h6">
            {translate("COOKIES_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("DATA_SECURITY")}</Typography>
          <Description variant="h6">
            {translate("DATA_SECURITY_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("DATA_BREACH_NOTIFICATION")}
          </Typography>
          <Description variant="h6">
            {translate("DATA_BREACH_NOTIFICATION_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("EFFECT")}</Typography>
          <Description variant="h6">
            {translate("EFFECT_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("CHANGES_TO_THIS_PRIVACY_POLICY")}
          </Typography>
          <Description variant="h6">
            {translate("CHANGES_TO_THIS_PRIVACY_POLICY_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("LINKS_TO_OTHER_SITES")}
          </Typography>
          <Description variant="h6">
            {translate("LINKS_TO_OTHER_SITES_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("CONTACT_INFORMATION")}
          </Typography>
          <Description variant="h6">
            {translate("CONTACT_INFORMATION_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("DATA_CONTROLLER")}</Typography>
          <Description variant="h6">
            {translate("DATA_CONTROLLER_DESCRIPTION_1")}
          </Description>
          {/* <Description variant="h6">
            {translate("DATA_CONTROLLER_DESCRIPTION_2")}
          </Description>
          <Description variant="h6">
            {translate("DATA_CONTROLLER_DESCRIPTION_3")}
          </Description> */}

          <Typography variant="h5">
            {translate("DATA_PROTECTION_OFFICER")}
          </Typography>
          <Description variant="h6">
            {translate("DATA_PROTECTION_OFFICER_DESCRIPTION_1")}
          </Description>
          <Description variant="h6">
            {translate("DATA_PROTECTION_OFFICER_DESCRIPTION_2")}
          </Description>
          <Description variant="h6">
            {translate("DATA_PROTECTION_OFFICER_DESCRIPTION_3")}
          </Description>
        </PrivacyPolicyWrapper>
      </ContentWrapper>
    </PrivacyPolicyContainer>
  );
};

PrivacyPolicy.defaultProps = {};

export default PrivacyPolicy;
