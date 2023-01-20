import React, { useState } from "react";
import ProjectVideoStyled from "./ProjectVideo.styled";
import VideoMp4 from "~/components/VideoMp4";

export default function ProjectVideo({ video }) {
  return (
    <ProjectVideoStyled>
      <VideoMp4
        asset={video?.asset}
        loop={true}
        muted={true}
        autoplay={true}
        playsinline={true}
      />
    </ProjectVideoStyled>
  );
}
