import React, { useState } from "react";
import ProjectVideoStyled from "./ProjectVideo.styled";
import MuxPlayer from "@mux/mux-player-react";

export default function ProjectVideo({ video }) {
  return (
    <ProjectVideoStyled>
      <MuxPlayer
        playbackId={video?.asset?.playbackId}
        controls={false}
        autoPlay={true}
        loop={true}
        muted={true}
        stream-type={"on-demand"}
        metadata={{
          video_title: "video",
          video_id: video?.asset?.data?.id,
        }}
      />
    </ProjectVideoStyled>
  );
}
