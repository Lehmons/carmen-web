// ****************************************/
// NextProject
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const NextProjectStyles = styled.section`
  width: 100%;

  padding-left: ${(props) => props.theme.sitePaddingLeftRight};
  padding-right: ${(props) => props.theme.sitePaddingLeftRight};
  padding-top: 5rem;
  padding-bottom: 5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  ${media.smallDesktopAndBelow`
    padding-left: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    padding-right: ${(props) => props.theme.sitePaddingLeftRightDesktop};
    padding-top: 50px;
    padding-bottom: 50px;
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

  .another-project {
    position: relative;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 100%;
    padding-bottom: 5rem;
    ${media.smallDesktopAndBelow`
    padding-bottom: 50px;
      `}
  }

  .another-project p {
    display: flex;
    width: 100%;
    font-size: ${font.p};
  }

  .another-project svg {
    position: relative;
    height: 50px;
    width: 50px;
    padding-top: 1.2rem;
    padding-left: 1rem;
    ${media.smallDesktopAndBelow`
    padding-top: 1px;
    padding-left: 10px;
      `}
    ${media.tabletPortraitAndBelow`
    padding-top: 1px;
    padding-left: 10px;
    `}
  }
`;

export default NextProjectStyles;
