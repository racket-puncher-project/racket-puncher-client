import styled from 'styled-components';
import { GrayLine, ImageBox } from '../../../../styles/ts/components/box';
import { CustomBadge } from '../../../../styles/ts/components/badge';
import React from 'react';
import { rem } from 'polished';
import { formatDateTime, pxToRem } from '../../../../utils/formatter';

import {
	FontSizeLg,
	FontSizeMc,
	InputLabelColor,
	PrimaryColor,
	ReportColor,
	YellowBgColor,
} from '../../../../styles/ts/common';
import { prefix } from '../../../../constants/prefix';

interface IMatchingCardProps {
	readonly matchingStartDateTime?: string;
	readonly matchingType?: string;
	readonly ntrp?: string;
	readonly reserved?: boolean;
	readonly title?: string;
	readonly locationImg?: string;
	readonly onClick?: () => void;
}

export default function MatchingCard(props: IMatchingCardProps) {
	return (
		<>
			<CardContainer onClick={props.onClick}>
				<ContentBox>
					<LeftBox>
						<ImageBox width={'128.205px'} height={'125px'}>
							<img src={props.locationImg} alt='card-image' />
						</ImageBox>
					</LeftBox>

					<RightBox>
						<BadgeBox>
							<CustomBadge
								color={props.reserved ? YellowBgColor : ReportColor}
								fontsize={FontSizeMc}>
								{props.reserved ? '예약완료' : '예약X'}
							</CustomBadge>
							<CustomBadge color={'#4682A9'} fontsize={FontSizeMc}>
								{convertMatchingType(props.matchingType)}
							</CustomBadge>
							<CustomBadge color={PrimaryColor} fontsize={FontSizeMc}>
								{props.ntrp}
							</CustomBadge>
						</BadgeBox>

						<MatchingTimeBox>
							{/* <p>10월 10일(월) 오후 2시</p> */}
							<p>{formatDateTime(props.matchingStartDateTime)}</p>
						</MatchingTimeBox>

						<MatchingTitleBox>
							<p>{props.title}</p>
						</MatchingTitleBox>
					</RightBox>
				</ContentBox>
			</CardContainer>
			<GrayLine />
		</>
	);
}

const convertMatchingType = (type: string) => {
	switch (type) {
		case 'SINGLE':
			return '단식';
		case 'DOUBLE':
			return '복식';
		case 'MIXED_DOUBLE':
			return '혼성 복식';
		case 'OTHER':
			return '기타';
	}
};

const CardContainer = styled.div`
	padding: ${(props) => (props.theme.isResponsive ? `${pxToRem('20px')} 0` : `${rem('20px')} 0`)};
`;
const ContentBox = styled.div`
	display: flex;
	align-items: center;
`;
const LeftBox = styled.div`
	flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('128.205px') : rem('128.205px'))};
	margin-right: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
`;
const RightBox = styled.div``;
const BadgeBox = styled.div`
	display: flex;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	flex-wrap: wrap;
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
`;
const MatchingTimeBox = styled.div`
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	p {
		font-family: Pretendard-Regular;
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeMc) : rem(FontSizeMc))};
		color: ${InputLabelColor};
	}
`;
const MatchingTitleBox = styled.div`
	p {
		font-family: Pretendard-Regular;
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
		color: ${InputLabelColor};
	}
`;
