import styled from 'styled-components';
import { rem } from 'polished';

import { InputBorderColor } from '../../common';
import { pxToRem } from '../../../../utils/formatter';

interface IImageProps {
	readonly width?: string;
	readonly height?: string;
	readonly heightInit?: boolean;
}

export const ImageBox = styled.div.withConfig({
	shouldForwardProp: (props) => props !== 'heightInit',
})<IImageProps>`
	width: ${(props) =>
		props.theme.isResponsive ? pxToRem(props.width || '30px') : rem(props.width || '30px')};
	height: ${(props) =>
		props.heightInit
			? ''
			: props.theme.isResponsive
			  ? pxToRem(props.height || '30px')
			  : rem(props.height || '30px')};
	img {
		width: 100%;
		display: block;
	}
`;

export const GrayLine = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${InputBorderColor};
`;
