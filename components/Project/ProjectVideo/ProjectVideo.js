import React, { useRef, useEffect } from "react";
import ProjectVideoStyled from "./ProjectVideo.styled";
import MuxPlayer from "@mux/mux-player-react";
import { useInView } from "react-intersection-observer";

export default function ProjectVideo({ video }) {
  return (
    <ProjectVideoStyled>
			<section>
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
			</section>
    </ProjectVideoStyled>
  );
}
