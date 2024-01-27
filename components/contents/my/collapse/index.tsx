import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Collapse as AntdCollapse, ConfigProvider } from 'antd';
import type { CollapseProps as IAntdCollapseProps } from 'antd';
import { pxToRem } from '../../../../utils/formatter';

import {
	PrimaryColor,
	WhiteColor,
	PlayerListBGColor,
	FontSizeSm,
	FontFamilyMedium,
} from '../../../../styles/ts/common';
import { ImageBox } from '../../../../styles/ts/components/box';
import PlayerCard from '../../../common/playerCard';
import { RoundButton } from '../../../../styles/ts/components/buttons';

interface IUser {
	readonly id: number; // 유저 아이디
	readonly profileImg: string; // 프로필 이미지
	readonly nickname: string; // 닉네임
}

// “모집” 종류가 아니라 “경기” 종료 - 스케줄러를 통해 자동으로 상태가 변한다.
// 모집중 | 인원다참 | 확정 | 모집실패 | 우천 | 경기 종료
type RecruitStatus = 'OPEN' | 'FULL' | 'CONFIRMED' | 'FAILED' | 'WEATHER_ISSUE' | 'FINISHED';

export interface IPostInfo {
	readonly id: number; // 매칭 id
	readonly title: string; // 제목
	readonly location: string; // 장소 - ㅇㅇ시 ㅇㅇ구
	readonly date: string; // 날짜
	readonly matchingType: string; // 매칭 타입
	readonly otherUsers: IUser[]; // 매칭에 참여한 유저 목록 (본인 제외)
	readonly recruitStatus: RecruitStatus; // 모집 상태
	readonly evaluated: boolean; // 평가 상태
}

interface IMyListItemProps {
	postInfo: IPostInfo;
}

export default function MyListItem(props: IMyListItemProps) {
	const { id, date, title, location, matchingType, otherUsers } = props.postInfo;

	const items: IAntdCollapseProps['items'] = [
		{
			key: id,
			label: (
				<Header>
					<DateNDay id='dataNDay'>{date}</DateNDay>
					<TitleLink id='title'>
						{title} / {location} / {matchingType}
					</TitleLink>
					<IconImageBox id='collapseIcon' width='24px' height='24px'>
						<img src='/svg/arrow.svg' />
					</IconImageBox>
				</Header>
			),
			children: (
				<PlayerCardContainer>
					<>
						{otherUsers?.map((otherUsersItem) => {
							return (
								<PlayerCard
									key={otherUsersItem.id}
									userNickName={otherUsersItem.nickname}
									profilePicURL={otherUsersItem.profileImg}
								/>
							);
						})}
						<RoundButton
							onClick={() => {
								console.log('클릭');
							}}
							colorstyle={'is-black'}
							aria-label='평가하기 페이지로 이동'>
							평가하기
						</RoundButton>
					</>
				</PlayerCardContainer>
			),
			showArrow: false,
		},
	];

	return (
		<>
			{otherUsers && (
				<>
					<ConfigProvider
						theme={{
							components: {
								Collapse: {
									borderRadiusLG: 20,
									headerBg: `${PrimaryColor}`,
									headerPadding: '10px 20px',
									colorTextHeading: `${WhiteColor}`,
									fontFamily: `${FontFamilyMedium}`,
								},
							},
						}}>
						<MyListItemContainer
							aria-role='listitem'
							items={items}
							defaultActiveKey={['1']}
							bordered={false}
						/>
					</ConfigProvider>
				</>
			)}
		</>
	);
}

const MyListItemContainer = styled(AntdCollapse)`
	width: 100%;
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};

	.ant-collapse-content-box {
		background-color: ${PlayerListBGColor};
		border-radius: 0px 0px ${rem('10px')} ${rem('10px')};
	}
`;

const Header = styled.div`
	display: grid;
	grid-template-columns: ${(props) =>
		props.theme.isResponsive
			? `${pxToRem('75px')} auto ${pxToRem('25px')}`
			: `${rem('75px')} auto ${rem('25px')}`};
	grid-template-areas: 'dateNDay title collapseIcon';
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('15px') : rem('15px'))};

	height: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSm) : rem(FontSizeSm))};
`;

const DateNDay = styled.span`
	grid-area: 'dateNDay';
	text-align: left;
`;

const TitleLink = styled.a`
	grid-area: 'title';
	text-align: left;
	color: ${WhiteColor};
	white-space: nowrap;
	overflow: hidden;

	&:hover,
	&:visited {
		color: ${WhiteColor};
	}
`;

const IconImageBox = styled(ImageBox)`
	grid-area: 'collapseIcon';
`;

const PlayerCardContainer = styled.div`
	padding: ${(props) =>
		props.theme.isResponsive
			? `16px ${pxToRem('4px')} 4px ${pxToRem('4px')}`
			: `16px ${rem('4px')} 4px ${rem('4px')}`};
	display: flex;
	flex-direction: column;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
`;
