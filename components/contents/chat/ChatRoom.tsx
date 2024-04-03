import React, { useState } from 'react';
import styled from 'styled-components';
import { ImageBox } from '../../../styles/ts/components/box';
import { prefix } from '../../../constants/prefix';
import { pxToRem } from '../../../utils/formatter';
import { rem } from 'polished';
import ChatListModal from './ChatListModal';

export default function ChatRoom() {
	const [isChatDrawerOpen, setIsChatDrawerOpen] = useState(false);
	const showChatDrawer = () => setIsChatDrawerOpen(true);
	const toggleChatListDrawer = (prev: boolean) => setIsChatDrawerOpen((prev) => !prev);

	const clickChatRoomBtn = () => {
		showChatDrawer();
	};

	return (
		<>
			<ChatListModal isOpen={isChatDrawerOpen} toggleDrawer={toggleChatListDrawer} />
			<ChatButtonContainer onClick={clickChatRoomBtn}>
				<ImageBox width={'120px'} height={'120px'}>
					<img src={`${prefix}/images/chat-room.png`} alt='채팅방 아이콘' />
				</ImageBox>
			</ChatButtonContainer>
		</>
	);
}

const ChatButtonContainer = styled.div`
	position: fixed;
	z-index: 99;
	bottom: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	right: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : `calc(50% - ${rem('315px')})`)};
`;
