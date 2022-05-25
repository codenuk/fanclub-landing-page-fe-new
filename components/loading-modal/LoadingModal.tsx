import { CircularProgress, Modal } from "@mui/material";
import React from "react";
import { LoadingModalWrapper } from "./loadingModal.styles";

type LoadingModalProps = {
  open: boolean;
  handleClose?: () => void;
};

const LoadingModal: React.FC<LoadingModalProps> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <LoadingModalWrapper>
        <CircularProgress />
      </LoadingModalWrapper>
    </Modal>
  );
};

LoadingModal.defaultProps = {
  handleClose() {},
};

export default LoadingModal;
