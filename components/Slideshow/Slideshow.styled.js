// ****************************************/
// Slideshow
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const SlideshowStyles = styled.section`
	
  picture {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	img {
		object-fit: contain;
		margin: auto;
		max-width: 100vw;
		border-radius: 0;
		${media.tabletPortraitAndBelow`
			height: 100% !important;
		`}
	}

	&,
	.detail__top {
		position: relative;
		height: 100vh;
	}

	.slider_container {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
	}

	.slider__container div {
		height: 100%;
	}

	.each__slide {
		width: 100vw;
		height: 100%;
		text-align: center;
	}

	/* draggable */

	.flickity-enabled.is-draggable {
		-webkit-tap-highlight-color: transparent;
		tap-highlight-color: transparent;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.flickity-enabled.is-draggable .flickity-viewport {
		cursor: move;
		cursor: -webkit-grab;
		cursor: grab;
	}

	.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
		cursor: -webkit-grabbing;
		cursor: grabbing;
	}
`;

export default SlideshowStyles;
