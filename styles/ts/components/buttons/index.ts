import styled from 'styled-components';
import { rem } from 'polished';

import * as common from '../../common';
import { pxToRem } from '../../../../utils/formatter';

interface IButtonProps {
	readonly colorstyle?: string;
	readonly width?: string;
	readonly height?: string;
	readonly disabled?: boolean;
	readonly fontsize?: string;
	readonly fontfamily?: boolean;
	readonly bordercolor?: string;
}

export const RoundButton = styled.button<IButtonProps>`
	width: ${(props) =>
		props.theme.isResponsive
			? props.width
				? pxToRem(props.width)
				: '100%'
			: props.width
			  ? rem(props.width)
			  : '100%'};
	height: ${(props) =>
		props.theme.isResponsive
			? props.height
				? pxToRem(props.height)
				: pxToRem('60px')
			: props.height
			  ? rem(props.height)
			  : rem('60px')};
	font-family: Pretendard-Medium;
	font-size: ${(props) =>
		props.theme.isResponsive ? pxToRem(common.FontSizeSm) : rem(common.FontSizeSm)};
	color: ${(props) => {
		switch (props.colorstyle) {
			case 'is-yellow':
				return common.KakaoFontColor;
			case 'is-white':
				return common.LightBlackColor;
			case 'is-white-green':
				return common.PrimaryColor;
			default:
				return common.WhiteColor;
		}
	}};
	border: none;
	border-radius: 20px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent !important;
	background-color: ${(props) => {
		switch (props.colorstyle) {
			case 'is-black':
				return common.BlackColor;
			case 'is-green':
				return common.PrimaryColor;
			case 'is-disabled':
				return common.DisabledColor;
			case 'is-yellow':
				return common.KakaoBgColor;
			case 'is-white':
				return common.WhiteColor;
			case 'is-white-green':
				return common.WhiteColor;
			default:
				return common.BlackColor;
		}
	}};

  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
	
	&:disabled {
		background-color: ${(props) => props.disabled && common.DisabledColor}
	}
;
}

div.align-box {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
}
`;
export const SquareButton = styled.button<IButtonProps>`
	width: ${(props) =>
		props.theme.isResponsive
			? props.width
				? pxToRem(props.width)
				: '100%'
			: props.width
			  ? rem(props.width)
			  : '100%'};
	height: ${(props) =>
		props.theme.isResponsive
			? props.height
				? pxToRem(props.height)
				: pxToRem('60px')
			: props.height
			  ? rem(props.height)
			  : rem('60px')};
	font-family: Pretendard-Medium;
	font-size: ${(props) =>
		props.theme.isResponsive ? pxToRem(common.FontSizeSm) : rem(common.FontSizeSm)};
	color: ${(props) => {
		switch (props.colorstyle) {
			case 'is-black':
				return common.WhiteColor;
			case 'is-white':
				return common.ReportColor;
			case 'is-whiteBlack':
				return common.BlackColor;
			default:
				return common.WhiteColor;
		}
	}};
	border: 1px solid
		${(props) => {
			switch (props.bordercolor) {
				case 'is-lightGray':
					return common.LightGrayColor;
				case 'is-whiteBlack':
					return common.BlackColor;
				default:
					return 'transparent';
			}
		}};
	border-radius: 5px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent !important;
	background-color: ${(props) => {
		switch (props.colorstyle) {
			case 'is-black':
				return common.BlackColor;
			case 'is-white':
				return common.WhiteColor;
			case 'is-whiteBlack':
				return common.WhiteColor;
			default:
				return common.BlackColor;
		}
	}};

	&:disabled {
		background-color: ${(props) => props.disabled && common.DisabledColor};
	}
`;

export const ImgButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: fit-content;
	height: fit-content;
	padding: 0px;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;
