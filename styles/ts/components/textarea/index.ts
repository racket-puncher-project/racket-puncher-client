import styled from 'styled-components';
import { rem } from 'polished';
import {
	FontFamilyRegular,
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	PrimaryColor,
} from '../../common';
import { pxToRem } from '../../../../utils/formatter';

export const TextArea = styled.textarea`
	resize: none !important;

	min-width: 100%;
	min-height: ${(props) => (props.theme.isResponsive ? pxToRem('140px') : rem('140px'))};
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	border-radius: 5px;
	padding: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	font-family: ${FontFamilyRegular};
	font-size: ${FontSizeSpSm};

	&:focus {
		border: 1px solid ${PrimaryColor};
		outline: none;
	}
`;
