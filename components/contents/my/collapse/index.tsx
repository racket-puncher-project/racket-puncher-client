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

interface IMyListItemProps {
	postInfo: {
		readonly postNum?: number;
		readonly date?: string;
		readonly day?: string;
		readonly postTitle?: string;
		readonly userAddress?: string;
		readonly matchType?: string;
		readonly playerList?: { userNickName: string; userEmail: string; profilePicURL: string }[];
	};
}

export default function MyListItem(props: IMyListItemProps) {
	// To do
	// key값 어떻게 지정할지

	const { postNum, date, day, postTitle, userAddress, matchType, playerList } = props.postInfo;

	const items: IAntdCollapseProps['items'] = [
		{
			key: postNum + '',
			label: (
				<Header>
					<DateNDay id='dataNDay'>
						{date || '-'}/{day || '-'}
					</DateNDay>
					<TitleLink id='title'>
						{postTitle || '-'} / {userAddress || '-'} / {matchType || '-'}
					</TitleLink>
					<IconImageBox id='collapseIcon' width='24px' height='24px'>
						<img src='/svg/arrow.svg' />
					</IconImageBox>
				</Header>
			),
			children: (
				<PlayerCardContainer>
					<>
						{playerList.map((_, i) => {
							const { userNickName, profilePicURL, userEmail } = props.postInfo.playerList[i];
							return (
								<PlayerCard
									key={i}
									userNickName={userNickName}
									profilePicURL={profilePicURL}
									userEmail={userEmail}
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
