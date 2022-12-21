// ****************************************/
// ImageGrid
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const ImageGridStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5rem;
  column-gap: 5rem;
  padding-left: ${(props) => props.theme.sitePaddingLeftRight};
  padding-right: ${(props) => props.theme.sitePaddingLeftRight};
  ${media.smallDesktopAndBelow`
    row-gap: 50px;
    column-gap: 50px;
    padding-left: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    padding-right: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
  ${media.tabletPortraitAndBelow`
      row-gap: 20px;
      grid-template-columns: repeat(1, 1fr);
      padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}
`;

export default ImageGridStyles;
