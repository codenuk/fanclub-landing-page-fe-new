import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import {
  ChangePasswordForm,
  ContentWrapper,
  LoadingModal,
  MessageModal,
} from "../../components";
import { useChangePassword } from "../../hooks";
import { ChangePasswordWrapper } from "./changePassword.styles";

type ChangePasswordProps = {};

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  const router = useRouter();
  const [showMessageModal, setShowMessageModal] = useState(false);
  const { changePassword, error, loading, data } = useChangePassword(() => {
    setShowMessageModal(true);
  });
  
  const handleChangePassword = useCallback(
    (values: any) => {
      changePassword({
        passwordOld: values?.passwordOld,
        passwordNew: values?.passwordNew,
        passwordConfirm: values?.passwordConfirm,
      });
    },
    [changePassword]
  );

  const isError = data?.setNewPassword?.res_code !== "00";

  const handleCloseMessageModal = useCallback(() => {
    if (!isError) {
      router.push("/");
    }
    setShowMessageModal(false);
  }, [isError]);

  const handleCancel = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <ChangePasswordWrapper>
      <LoadingModal open={loading} />
      <MessageModal
        open={showMessageModal}
        handleClose={handleCloseMessageModal}
        mode={isError ? "error" : "success"}
        title={isError ? "เปลี่ยนรหัสไม่สำเร็จ" : "เปลี่ยนรหัสไม่สำเร็จ"}
        description={
          !isError
            ? "ดำเนินการเปลี่ยนเรียบร้อยแล้ว" : "รหัสผ่านไม่ตรงกัน"
            // : `{${JSON.stringify(data?.setNewPassword?.res_desc)}}`
        }
      />
      <ContentWrapper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          alignSelf: "center",
          padding: 2,
        }}
      >
        <Typography variant="h4">ตั้งรหัสผ่านใหม่</Typography>
        <ChangePasswordForm
          onCancel={handleCancel}
          onSubmit={handleChangePassword}
        />
      </ContentWrapper>
    </ChangePasswordWrapper>
  );
};

ChangePassword.defaultProps = {};

export default ChangePassword;
