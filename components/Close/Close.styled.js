// ****************************************/
// Close
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const CloseStyles = styled(motion.button)`
  background: transparent;
  padding: 3.5rem;
  z-index: 3;
  pointer-events: auto;
  ${media.smallDesktopAndBelow`
    padding: 35px;
  `};

  &:hover {
    cursor: pointer;
  }

  .circle {
    position: absolute;
    top: calc(50% - 1.2rem);
    left: calc(50% + 1.2rem);
    transform: translate(-50%, -50%) rotate(45deg);
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 3.2rem;
    border: 1px solid black;
    transition: background 0.25s ease-in-out, transform 0.25s ease-in-out;
    ${media.minDevicePixelRatio2`
      border-width: 0.5px;
    `};
    ${media.smallDesktopAndBelow`
      width: 32px;
      height: 32px;
      border-radius: 32px;
      top: calc(50% - 12px);
      left: calc(50% + 12px);
    `};
  }

  &:hover .circle {
    background: black;
    transform: translate(-50%, -50%) rotate(135deg);
  }

  &:hover .circle span {
    background: black;
  }

  .circle span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 2px;
    width: 1.4rem;
    background: black;
    display: block;
    transition: background 0.25s ease-in-out;
    ${media.smallDesktopAndBelow`
      width: 14px;
    `};
  }

  .circle span + span {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .circle {
    background: white;
  }

  &.is-inverse .circle {
    border-color: black;
    background: transparent;
  }

  &.is-inverse .circle span {
    background: black;
  }

  &.is-inverse:hover .circle {
    background: black;
  }

  &:hover .circle span {
    background: white;
  }

  &.is-inverse:hover .circle span {
    background: black;
  }
`;

export default CloseStyles;
