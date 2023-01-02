// ****************************************/
// NextProject
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const NextProjectStyles = styled.section`
  width: 100%;

  padding-left: ${(props) => props.theme.sitePaddingLeftRight};
  padding-right: ${(props) => props.theme.sitePaddingLeftRight};
  padding-top: 13rem;
  padding-bottom: 13rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  ${media.smallDesktopAndBelow`
    padding-left: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    padding-right: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    `}
  ${media.tabletPortraitAndBelow`
      padding-left: ${(props) => props.theme.sitePaddingLeftRightMobile};
      padding-right: ${(props) => props.theme.sitePaddingLeftRightMobile};
    `}

    & > section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    column-gap: 5rem;
    row-gap: 5rem;
    ${media.smallDesktopAndBelow`
        row-gap: 50px;
        column-gap: 50px;
      `}
    ${media.tabletPortraitAndBelow`
      row-gap: 20px;
      grid-template-columns: repeat(1, 1fr);
    `}
  }

  .image-block img {
    border-radius: 20px;
  }
`;

export default NextProjectStyles;
