// ****************************************/
// Scaler
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ScalerStyles = styled.section`
  position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	pointer-events: none;

	.scaler {
		position: absolute;
	}

	.scaler {
		overflow: hidden;
	}

	.scaler .image-block,
	.scaler .image-wrapper {
		width: 100%;
		height: 100%;
	}

	
`;

export default ScalerStyles;
