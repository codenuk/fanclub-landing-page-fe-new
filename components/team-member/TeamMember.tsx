import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  ImgZone,
  TeamMemberWrapper,
  TeamPhoto,
  TextAll,
  TextZone,
} from "./teamMember.styles";

type TeamMemberProps = {
  photoUrl: string;
  name: string;
  special?: string;
  shortName?: string;
  position: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  photoUrl,
  name,
  special,
  shortName,
  position,
}) => {
  return (
    <TeamMemberWrapper>
      <ImgZone>
        <TeamPhoto
          src={photoUrl}
          width="200px"
          height="200px"
          alt="photo-image"
        />
      </ImgZone>
      <TextZone>
        <h5
          style={{ textAlign: "center", color: "white", margin: "6px auto 0" }}
        >
          {name}
          <span style={{ fontSize: "16px" }}>{special}</span>
        </h5>
        <p
          style={{
            textAlign: "center",
            color: "white",
            margin: "0 auto 0",
          }}
        >
          {" "}
          {shortName}
        </p>
        <TextAll
          variant="body2"
          sx={{ textAlign: "center", color: "white", margin: "0 auto" }}
        >
          {position}
        </TextAll>
        {/* {position.split("\n").map((str, index) => (
          <TextAll
          className={styles.fontSizeThreetyTwo}
            key={index}
            variant="body2"
            sx={{ textAlign: "center", color: "white", margin: "0 auto" }}
          >
            {str}
          </TextAll>
        ))} */}
      </TextZone>
    </TeamMemberWrapper>
  );
};

TeamMember.defaultProps = {};

export default TeamMember;
