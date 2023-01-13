// ****************************************/
// Lightbox
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";
import { motion } from 'framer-motion';

const LightboxStyles = styled(motion.section)`
  position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 4;
	background: ${props => props.theme.grey100};

	.carousel,
	.image-block,
	.image-block .image-wrapper {
		height: 100%;
	}

	section,
	div {
		width: 100%;
	}

	img {
		object-fit: contain;
		height: 100vh;
		width: auto;
	}

	.card {
		width: 100%;
		height: 100%;
		background: ${props => props.theme.grey100};
	}

	.close-btn {
		position: absolute;
		top: 2.5rem;
		right: 2.5rem;
		${media.smallDesktopAndBelow`
			top: 25px;
			right: 25px;
		`}
	}

	.each__slide {
		margin-right: 10px;
	}
`;

export default LightboxStyles;
