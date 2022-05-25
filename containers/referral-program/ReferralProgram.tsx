import { Button, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { CouponCard, LoadingModal } from "../../components";
import {
  useCreateReferralCode,
  useTranslation,
  useUserInfo,
} from "../../hooks";
import accounti18n from "../../i18n/account.i18n";
import {
  CouponWrapper,
  inviteFriendStyles,
  ReferralProgramBox,
  ReferralProgramWrapper,
} from "./referralProgram.styles";
import { useSelector } from "react-redux";
import { ICombineReducers } from "../../redux/reducers";

type ReferralProgramProps = {};

const ReferralProgram: React.FC<ReferralProgramProps> = () => {
  const { translate } = useTranslation(accounti18n);
  const { loading: loadingUserProfile } = useUserInfo();
  const userInfoRedux = useSelector(
    (state: ICombineReducers) => state.userInfoReducer.userInfo
  );
  const { createReferralCode, loading } = useCreateReferralCode();

  const handleInviteClick = useCallback(() => {
    createReferralCode();
  }, [createReferralCode]);

  const displayingCode = userInfoRedux?.campaignReferral?.promoCodeID;

  return (
    <ReferralProgramWrapper>
      <LoadingModal open={loading || loadingUserProfile} />
      <Typography variant="h4">{translate("REFERRAL_PROGRAM")}</Typography>
      <ReferralProgramBox>
        {!!displayingCode ? (
          <CouponWrapper>
            <CouponCard code={displayingCode} />
          </CouponWrapper>
        ) : (
          <Button
            size="large"
            fullWidth
            sx={inviteFriendStyles}
            onClick={handleInviteClick}
          >
            {translate("INVITE_FRIEND")}
          </Button>
        )}
      </ReferralProgramBox>
    </ReferralProgramWrapper>
  );
};

ReferralProgram.defaultProps = {};

export default ReferralProgram;
