import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  LineShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

import {
  CodeGroup,
  CopyButton,
  CouponCardWrapper,
  CouponContainer,
  SocialGroup,
} from "./couponCard.styles";

interface Props {
  code: string;
}
const CouponCard: React.FC<Props> = ({ code }): JSX.Element => {
  const [url, setUrl] = useState(
    `${window.location.origin}/sign-up?ref_code=${code}`
  );

  const handleCopyRefCode = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  const handleCopyLinkRef = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentURL = window.location.origin;
      navigator.clipboard.writeText(`${currentURL}/sign-up?ref_code=${code}`);
    }
  }, [code]);

  return (
    <CouponCardWrapper>
      <CouponContainer>
        <Typography variant="h5" fontWeight="bold" color="white">
          เชิญเพื่อน ได้ 25 Stars
        </Typography>
        <Typography variant="body1" color="white">
          Invite Link
        </Typography>
        <CopyButton onClick={handleCopyLinkRef}>
          COPY <ContentCopyIcon sx={{ marginLeft: 1 }} />
        </CopyButton>
        <Typography variant="body1" color="white">
          Share on Social
        </Typography>
        <SocialGroup>
          <TwitterShareButton url={url}>
            <Image
              src="/images/twitter.png"
              width="36.61"
              height="29.74"
              layout="intrinsic"
              alt="twitter-icon"
            />
          </TwitterShareButton>
          <FacebookShareButton url={url}>
            <Image
              src="/images/facebook-icon.svg"
              width="18.18"
              height="35"
              layout="intrinsic"
              alt="twitter-icon"
            />
          </FacebookShareButton>
          <LineShareButton url={url}>
            <Image
              // line img
              src="/images/youtube-icon.svg"
              width="35"
              height="35"
              layout="intrinsic"
              alt="twitter-icon"
            />
          </LineShareButton>
        </SocialGroup>
        <CodeGroup>
          <Typography fontWeight="bold" variant="h5" color="white">
            {code}
          </Typography>
          <IconButton
            onClick={handleCopyRefCode}
            sx={{
              width: 35,
              height: 35,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginLeft: 1,
            }}
          >
            <ContentCopyIcon sx={{ color: "white" }} />
          </IconButton>
        </CodeGroup>
      </CouponContainer>
    </CouponCardWrapper>
  );
};
export default CouponCard;
