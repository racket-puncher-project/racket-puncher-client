import styled from 'styled-components';
import { rem } from 'polished';

import {
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	InputLabelColor,
	PrimaryColor,
	InputErrorColor,
} from '../../common';
import { pxToRem } from '../../../../utils/formatter';

interface IInputBox {
	readonly certify?: string;
}

export const InputBox = styled.div<IInputBox>`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	position: ${(props) => props.certify === 'true' && 'relative'};

	label {
		display: block;
		font-family: Pretendard-Regular;
		font-size: ${(props) => (props.theme.isResponsive ? '0.5rem' : FontSizeSpSm)};
		margin-bottom: 10px;
		color: ${InputLabelColor};
	}

	input {
		height: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
		border: 1px solid ${InputBorderColor};
		background: ${InputBoxColor};
		border-radius: 5px;
		padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('15px')}` : `0 ${rem('15px')}`)};

		&:focus {
			border: 1px solid ${PrimaryColor};
			outline: none;
		}
	}

	p {
		margin-top: 5px;
	}

	span.limit-time {
		position: absolute;
		bottom: ${rem('25px')};
		transform: translateY(50%);
		right: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
		color: ${InputErrorColor};
	}
`;
