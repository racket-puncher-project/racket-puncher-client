import React from 'react';
import styled from 'styled-components';
import { ImageBox } from '../../styles/ts/components/box';
import { prefix } from '../../constants/prefix';
import { pxToRem } from '../../utils/formatter';
import { rem } from 'polished';

export default function Chat() {
	return (
		<>
			<ChatButtonContainer>
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
	right: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : `calc(50% - ${rem('340px')})`)};
`;
