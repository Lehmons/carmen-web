// ****************************************/
// ProjectVideo
// ****************************************/

import styled from "styled-components";
import { media } from "../../Styles";

const ProjectVideoStyles = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 8rem;
  /* padding-left: ${(props) => props.theme.sitePaddingLeftRight};
  padding-right: ${(props) => props.theme.sitePaddingLeftRight}; */
  display: flex;
  position: relative;
  ${media.smallDesktopAndBelow`
      margin-top: 80px;
    `}

  .video-container {
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tabletLandscapeAndBelow`
    margin-top: 60px;
    padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
    padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
`;

export default ProjectVideoStyles;
