// ****************************************/
// Accordion
// ****************************************/

// import styled from "styled-components";
// import { font, media, underline } from "../Styles";

// const AccordionStyles = styled.section`
//   button {
//     position: relative;
//     background: none;
//     padding: 2.5rem 1.2rem 2.5rem 0;
//     border-bottom: 1px solid ${(props) => props.theme.blue};
//     display: block;
//     width: 100%;
//     font-size: ${font.smallP};
//     ${media.smallDesktopAndBelow`
//       padding: 25px 12px 25px 0;
//       font-size: ${font.smallPMobile};
//     `};
//     ${media.minDevicePixelRatio2`
//       border-bottom: 0.5px sold black;
//     `}
//     ${media.tabletPortraitAndBelow`
//       padding: 25px 25px 25px 0;
//     `}
//   }

//   button:focus {
//     outline: 0;
//   }

//   ul,
//   ol,
//   li,
//   p {
//     font-size: ${font.p};
//     font-family: ${font.family200};
//     @supports (font-variation-settings: normal) {
//       font-family: ${font.family200VF};
//     }
//     line-height: ${font.pLineHeight};
//     ${media.smallDesktopAndBelow`
//       font-size: ${font.pMobile};
//     `}
//   }

//   button .subtitle {
//     display: block;
//     font-family: ${font.family200};
//     @supports (font-variation-settings: normal) {
//       font-family: ${font.family200VF};
//     }
//     padding-top: 0.3rem;
//     color: ${(props) => props.theme.black};
//     font-size: ${font.smallP};
//     ${media.smallDesktopAndBelow`
//       padding-top: 3px;
//       font-size: ${font.smallPMobile};
//     `}
//   }

//   button {
//     text-align: left;
//   }

//   .accordion-content {
//     overflow: hidden;
//   }

//   .closed {
//     .vertical {
//       transition: all 0.3s cubic-bezier(0.83, 0, 0.37, 1);
//       transform: rotate(-90deg);
//     }
//     .horizontal {
//       transition: all 0.3s cubic-bezier(0.83, 0, 0.37, 1);
//       transform: rotate(-90deg);
//       opacity: 1;
//     }
//   }

//   .opened {
//     opacity: 1;
//     .vertical {
//       transition: all 0.3s cubic-bezier(0.83, 0, 0.37, 1);
//       transform: rotate(90deg);
//     }
//     .horizontal {
//       transition: all 0.3s cubic-bezier(0.83, 0, 0.37, 1);
//       transform: rotate(90deg);
//       opacity: 0;
//     }
//   }

//   .circle-plus {
//     position: absolute;
//     top: 50%;
//     right: 12px;
//     height: 1.5rem;
//     width: 1.5rem;
//     transform: translateY(-50%);
//     ${media.smallDesktopAndBelow`
//       width: 9px;
//       height: 9px;
//     `}
//   }

//   /* .circle-plus .circle {
//     position: relative;
//     width: 1.5rem;
//     height: 1.5rem;
//     border: solid 1px black;
//     ${media.smallDesktopAndBelow`
//       width: 15px;
//       height: 15px;
//     `}
//   } */

//   .circle-plus .circle .horizontal {
//     position: absolute;
//     background-color: black;
//     width: 1.5rem;
//     height: 1px;
//     left: 50%;
//     top: 50%;
//     margin-left: -0.7rem;
//     ${media.smallDesktopAndBelow`
//       width: 9px;
//       margin-left: -4px;
//     `}
//   }

//   .circle-plus .circle .vertical {
//     position: absolute;
//     background-color: black;
//     width: 1px;
//     height: 1.5rem;
//     left: 50%;
//     top: 50%;
//     margin-top: -0.7rem;
//     ${media.smallDesktopAndBelow`
//       height: 9px;
//       margin-top: -4px;
//     `}
//   }

//   .accordion-content > section {
//     padding-top: 2.5rem;
//     padding-bottom: 4rem;
//     ${media.smallDesktopAndBelow`
//       padding-top: 25px;
//       padding-bottom: 40px;
//     `};
//   }

//   ul,
//   ol {
//     position: relative;
//   }

//   ol {
//     padding-left: 17px;
//   }

//   ul {
//     padding-left: 10px;
//     ${media.smallDesktopAndBelow`
// 		  padding-left: 10px;
// 		`}
//   }

//   ul li {
//     position: relative;
//   }

//   ul li:before {
//     position: absolute;
//     left: -10px;
//     top: 50%;
//     width: 7px;
//     height: 1px;
//     background: black;
//     display: block;
//     transform: translateY(calc(-50% - 1px));
//     content: "";
//   }
// `;

// export default AccordionStyles;
