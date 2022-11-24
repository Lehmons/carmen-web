// ****************************************/
// ImageBlock
// ****************************************/

import styled from "styled-components";
import { media, underline } from "../Styles";

const ImageBlockStyles = styled.section`
  position: relative;
  .image-wrapper {
    position: relative;
    height: 0;
    ${media.smallDesktopAndBelow`
    width: 100%;
	`}
    ${media.tabletPortraitAndBelow`
    width: 100%;
  `}
  }

  &.no-padding-bottom .image-wrapper {
    height: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &.lazy-pending img {
    opacity: 0;
  }

  &.lazy-visible img {
    opacity: 1;
  }
`;

export default ImageBlockStyles;
