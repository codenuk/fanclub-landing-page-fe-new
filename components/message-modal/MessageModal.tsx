import {
  IconButton,
  Modal,
  Palette,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  CloseButton,
  MessageModalBox,
  MessageModalWrapper,
} from "./messageModal.styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";

type MessageModalProps = {
  open: boolean;
  mode?: "success" | "error";
  title?: string;
  description?: string;
  handleClose?: () => void;
};

const MessageModal: React.FC<MessageModalProps> = ({
  open,
  title,
  description,
  mode,
  handleClose,
}) => {
  const { palette } = useTheme();

  return (
    <Modal open={open} onClose={handleClose}>
      <MessageModalWrapper>
        <MessageModalBox>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          {mode === "success" ? (
            <CheckCircleIcon color={mode} sx={{ width: 40, height: 40 }} />
          ) : (
            <ErrorIcon color={mode} sx={{ width: 40, height: 40 }} />
          )}
          <Typography
            variant="subtitle1"
            color={
              mode === "success" ? palette.success.main : palette.error.main
            }
          >
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </MessageModalBox>
      </MessageModalWrapper>
    </Modal>
  );
};

MessageModal.defaultProps = {
  handleClose() {},
  mode: "success",
  title: "title",
  description: "description",
};

export default MessageModal;
