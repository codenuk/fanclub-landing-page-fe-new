import { Card, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import {
  AccountDetailForm,
  LoadingModal,
  MessageModal,
} from "../../components";
import { AccountDetailFormData } from "../../components/account-detail-form/AccountDetailForm";
import { useTranslation, useUpdateUserProfile, useUserInfo } from "../../hooks";
import accounti18n from "../../i18n/account.i18n";
import { AccountDetailWrapper } from "./accountDetail.styles";
import { useSelector } from "react-redux";
import { ICombineReducers } from "../../redux/reducers";

type AccountDetailProps = {};

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const { translate } = useTranslation(accounti18n);
  const router = useRouter();
  const { loading } = useUserInfo();
  const userInfoRedux = useSelector(
    (state: ICombineReducers) => state.userInfoReducer.userInfo
  );

  const {
    updateUserInfo,
    loading: updating,
    error,
  } = useUpdateUserProfile(() => {
    setShowMessageModal(true);
  });
  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleCloseMessageModal = useCallback(() => {
    setShowMessageModal(false);
  }, []);

  const handleCancel = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleUpdateUserInfo = useCallback(
    async (values: AccountDetailFormData) => {
      await updateUserInfo({
        name: values.name,
        surname: values.surname,
        // phoneNumber: values.phoneNumber,
        birthday: values.birthday,
      });
    },
    [updateUserInfo]
  );

  return (
    <AccountDetailWrapper>
      <MessageModal
        open={showMessageModal}
        mode={!!error ? "error" : "success"}
        title={
          !!error
            ? translate("UPDATE_FAILED_TITLE")
            : translate("UPDATE_COMPLETE_TITLE")
        }
        description={
          !!error
            ? `{${JSON.stringify(error)}}`
            : translate("UPDATE_COMPLETE_DESC")
        }
        handleClose={handleCloseMessageModal}
      />
      <LoadingModal open={loading || updating} />
      <Typography variant="h4">{translate("ACCOUNT_DETAIL")}</Typography>
      <AccountDetailForm
        defaultValues={userInfoRedux}
        onSubmit={handleUpdateUserInfo}
        onCancel={handleCancel}
      />
    </AccountDetailWrapper>
  );
};

AccountDetail.defaultProps = {};

export default AccountDetail;
