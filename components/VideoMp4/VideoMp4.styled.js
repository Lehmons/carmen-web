// ****************************************/
// Video
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const VideoStyles = styled.section`
  width: 100%;
  height: 100%;

  video {
    transition: opacity 0.3s ease-in-out;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
  }

  &.is-not-data-loaded {
    display: none;
  }

  &.is-data-loaded,
  &.is-low-power-mode {
    display: block;
  }

  &.is-data-loaded img,
  &.is-low-power-mode img {
    z-index: 1;
    ${media.tabletLandscapeAndBelow`
      position: absolute;
      display: none;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      height: 100%;
    `}
  }

  &.is-data-loaded video,
  &.is-low-power-mode video {
    position: relative;
    z-index: 2;
  }

  & > section {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export default VideoStyles;
