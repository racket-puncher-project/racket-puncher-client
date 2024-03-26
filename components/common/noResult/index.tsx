import React from 'react';
import styled from 'styled-components';
import { ImageBox } from '../../../styles/ts/components/box';
import { BlackColor, FontSizeLg } from '../../../styles/ts/common';
import { pxToRem } from '../../../utils/formatter';
import { rem } from 'polished';
import { prefix } from '../../../constants/prefix';

export default function NoResultBox() {
	return (
		<>
			<NoResultContainer>
				<ImageBox width='100px' height='100px'>
					<img src={`${prefix}/images/no-result.png`} alt='검색결과없음' />
				</ImageBox>
				<p>조회 결과가 없습니다</p>
			</NoResultContainer>
		</>
	);
}

const NoResultContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${(props) => (props.theme.isResponsive ? `${pxToRem('80px')} 0` : `${rem('80px')} 0`)};
	p {
		margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('25px') : rem('25px'))};
		font-size: ${FontSizeLg};
		color: ${BlackColor};
	}
`;
