import { TextField, Typography, useTheme } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Confetti from "react-confetti";
import {
  ContentWrapper,
  LoadingModal,
  MessageModal,
  SlideUp,
} from "../../components";
import { AirdropSchema } from "../../form-validators/airdrop.validator";
import { useAirdropEarn, useFormikUtils, useTranslation } from "../../hooks";
import airdropPageI18n from "../../i18n/airdrop.i18n";
import { formatNumber } from "../../utils/number-utils";
import {
  AirdropDescription,
  AirdropDescriptionGroup,
  AirdropImageWrapper,
  AirdropTextWrapper,
  AirdropWrapper,
  EarnForm,
  RecieveAirdropButton,
} from "./airdrop.styles";

type AirdropProps = {};

const Airdrop: React.FC<AirdropProps> = () => {
  const [promoCodeID, setPromoCodeID] = useState("");
  const { errors, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      promoCodeID: "",
    },
    validationSchema: AirdropSchema,
    onSubmit: (values: any) => {
      handleRecievedAirdrop(values.promoCodeID);
    },
  });

  const { textFieldProps } = useFormikUtils({
    values,
    errors,
    handleChange,
  });

  const [showEarnStatus, setShowEarnStatus] = useState(false);
  const [showErrorStatus, setShowErrorStatus] = useState("");
  const { customTheme } = useTheme();

  const {
    earn,
    loading: earning,
    data: earnedData,
  } = useAirdropEarn(
    (earnedResult) => {
      if (earnedResult.res_code !== "98") {
        setShowEarnStatus(true);
        setIsRecievedAirdrop(true);
        let width = 2000;
        let height = 500;

        if (typeof window !== "undefined") {
          width = window.screen.availWidth;
          height =
            window.screen.availHeight -
            (customTheme.constants.NAVBAR_HEIGHT +
              customTheme.constants.FOOTER_HEIGHT);
        }

        setTweenSize({
          width,
          height,
        });

        setTween(true);
      } else {
        setShowErrorStatus(translate("RECIEVED_COIN"));
        setIsRecievedAirdrop(true);
      }
    },
    (error) => {
      setShowErrorStatus(`(${error})`);
    }
  );
  const { translate } = useTranslation(airdropPageI18n);
  const [isRecievedAirdrop, setIsRecievedAirdrop] = useState(false);

  const [tweenSize, setTweenSize] =
    useState<{ width: number; height: number }>();
  const [isTween, setTween] = useState(false);

  const handleRecievedAirdrop = useCallback(
    async (promoCodeID: string) => {
      try {
        const campaignID =
          "CAMPAIGN_U2F0IE1hciAwNSAyMDIyIDE3OjMwOjUzIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=";
        earn(campaignID, promoCodeID);
      } catch (error) {}
    },
    [earn]
  );

  const recievingMessage = useMemo(() => {
    const message = translate(
      isRecievedAirdrop ? "RECIEVED_COIN" : "RECIEVE_COIN"
    );
    return message;
  }, [isRecievedAirdrop, translate]);

  useEffect(() => {
    setIsRecievedAirdrop(false);
    setShowEarnStatus(false);
    setShowErrorStatus("");
    setPromoCodeID("");
  }, [values.promoCodeID]);

  return (
    <>
      <SlideUp>
        <MessageModal
          open={!!showErrorStatus || showEarnStatus}
          handleClose={() => {
            setShowEarnStatus(false);
            setShowErrorStatus("");
          }}
          title={
            showErrorStatus ? "ไม่สามารถรับ Stars" : `ได้รับ Stars เรียบร้อยแล้ว`
          }
          mode={showErrorStatus ? "error" : "success"}
          description={
            showErrorStatus
              ? ""
              : `ได้รับ ${formatNumber(
                  earnedData?.promoCode?.couponValue
                )} Stars เรียบร้อยแล้ว`
          }
        />
        <LoadingModal open={earning} />
        <ContentWrapper>
          <AirdropWrapper>
            <AirdropImageWrapper>
              <Image
                src="/images/airdrop-img-1.png"
                width="544"
                height="465"
                layout="intrinsic"
                alt="airdrop-img"
              />
            </AirdropImageWrapper>
            <AirdropTextWrapper>
              <Typography variant="h3" color="secondary" fontWeight="bold">
                {translate("AIRDROP")}
              </Typography>
              <AirdropDescriptionGroup>
                <AirdropDescription>
                  {translate("DESCRIPTION_1")}
                </AirdropDescription>
                {/* <AirdropDescription>
                  {translate("DESCRIPTION_2")}
                </AirdropDescription> */}
              </AirdropDescriptionGroup>
              <EarnForm onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  sx={{
                    maxWidth: 327,
                    alignSelf: {
                      xs: "center",
                      md: "flex-start",
                    },
                  }}
                  label="Promo code"
                  InputLabelProps={{ shrink: true }}
                  variant="filled"
                  placeholder="Promo Code"
                  {...textFieldProps("promoCodeID")}
                />
                <RecieveAirdropButton
                  disabled={isRecievedAirdrop}
                  fullWidth
                  type="submit"
                >
                  {recievingMessage}
                </RecieveAirdropButton>
              </EarnForm>
            </AirdropTextWrapper>
            {isTween && (
              <Confetti
                onConfettiComplete={() => setTween(false)}
                width={tweenSize?.width}
                height={tweenSize?.height}
                tweenDuration={5000}
                recycle={false}
              />
            )}
          </AirdropWrapper>
        </ContentWrapper>
      </SlideUp>
    </>
  );
};

Airdrop.defaultProps = {};

export default Airdrop;
