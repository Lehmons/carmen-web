// ****************************************/
// SingleImage
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const SingleImageStyles = styled.section`
  width: 100%;
  &.is-small,
  &.is-medium {
    margin-left: auto;
    margin-right: auto;
    ${media.tabletPortraitAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
  }

  &.is-small {
    max-width: 63rem;
    ${media.smallDesktopAndBelow`
      max-width: 630px;
    `}
  }

  &.is-medium {
    max-width: 86rem;
    ${media.smallDesktopAndBelow`
      max-width: 860px;
    `}
  }

  &.has-margin {
    padding-left: ${(props) => props.theme.sitePaddingLeftRight};
    padding-right: ${(props) => props.theme.sitePaddingLeftRight};
    ${media.smallDesktopAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightDesktop};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
    ${media.tabletPortraitAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
  }

  .image-block img {
    border-radius: 20px;
  }
`;

export default SingleImageStyles;
