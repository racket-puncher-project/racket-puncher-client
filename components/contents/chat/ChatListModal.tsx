import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RoundButton } from '../../../styles/ts/components/buttons';
import DrawerBox from '../../common/drawer';
import { PrimaryColor, WhiteColor } from '../../../styles/ts/common';
import { pxToRem } from '../../../utils/formatter';
import { rem } from 'polished';
import ChatService from '../../../service/chat/service';

interface ChatListDrawerProps {
	readonly isOpen: boolean;
	readonly toggleDrawer: (prev: boolean) => void;
}

export default function ChatListModal(props: ChatListDrawerProps) {
	const { isOpen, toggleDrawer } = props;

	const [chatList, setChatList] = useState();

	// 채팅방 목록 불러오기
	const getChatListData = async () => {
		try {
			const res = await ChatService.getChatList();
			console.log('res', res.data);
			setChatList(res.data);
		} catch (e) {
			console.log(e);
		}
	};

	const testData = [
		{
			id: 1,
			chatRoomName: 'Test01',
		},
		{
			id: 2,
			chatRoomName: 'Test02',
		},
	];

	useEffect(() => {
		getChatListData();
	}, []);

	return (
		<DrawerBox
			isOpen={isOpen}
			height={'75vh'}
			placement={'bottom'}
			toggleDrawer={() => toggleDrawer(isOpen)}>
			<ChatListModalContainer>
				{testData.map((item) => {
					return (
						<ChatListContainer key={item.id}>
							<p>{item.chatRoomName}님과의 채팅방</p>
							<RoundButton width={'100px'} height={'50px'} colorstyle={'is-white-green'}>
								입장
							</RoundButton>
						</ChatListContainer>
					);
				})}
			</ChatListModalContainer>
		</DrawerBox>
	);
}

const ChatListModalContainer = styled.div``;
const ChatListContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${PrimaryColor};
	border-radius: 15px;
	box-shadow: 0px 0px 20px 0px #00000040;
	margin-bottom: 20px;
	padding: ${(props) =>
		props.theme.isResponsive
			? `${pxToRem('15px')} ${pxToRem('30px')}`
			: `${rem('15px')} ${rem('30px')}`};
	p {
		font-family: Pretendard-SemiBold;
		font-size: 20px;
		color: ${WhiteColor};
	}
`;
