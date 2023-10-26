import styled from 'styled-components';
import { rem } from 'polished';

import {
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	InputLabelColor,
	PrimaryColor,
} from '../../common';

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;

	label {
		display: block;
		font-family: Pretendard-Regular;
		font-size: ${FontSizeSpSm};
		margin-bottom: 10px;
		color: ${InputLabelColor};
	}
	input {
		height: ${rem('50px')};
		border: 1px solid ${InputBorderColor};
		background: ${InputBoxColor};
		border-radius: 5px;
		padding: 0 15px;
		&:focus {
			border: 1px solid ${PrimaryColor};
			outline: none;
		}
	}
	p {
		margin-top: 5px;
	}
`;
