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

	&.is-large img {
		border-radius: initial;
	}

	.caption {
		margin-left: auto;
		margin-right: auto;
	}

	&.is-large .caption {
		max-width: 131.2rem;
		${media.smallDesktopAndBelow`
			max-width: 1312px;
		`}
	}

	&.is-medium .caption {
		max-width: 108.4rem;
		${media.smallDesktopAndBelow`
			max-width: 1084px;
			padding-top: 48px;
		`}
	}

	&.is-small .caption {
		max-width: 85.8rem;
		${media.smallDesktopAndBelow`
			max-width: 858px;
		`}
	}

	&.is-medium .caption,
	&.is-large .caption {
		padding-top: 4.8rem;
		${media.smallDesktopAndBelow`
			padding-top: 48px;
		`}
	}

	&.is-large .caption p {
		font-size: ${font.h3};
		font-family: ${font.family200};
		line-height: ${font.titleLineHeight};
		padding-top: 11rem;
		${media.smallDesktopAndBelow`
			padding-top: 110px;
			font-size: ${font.h3Tablet};
		`}
		${media.tabletPortraitAndBelow`
			font-size: ${font.h3Mobile};
		`}
	}

	&.is-small .caption p{
		max-width: 85.8rem;
		${media.smallDesktopAndBelow`
			max-width: 858px;
		`}
	}
`;

export default SingleImageStyles;
