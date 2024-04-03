import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RoundButton } from '../../../styles/ts/components/buttons';
import DrawerBox from '../../common/drawer';
import { PrimaryColor, WhiteColor } from '../../../styles/ts/common';
import { pxToRem } from '../../../utils/formatter';
import { rem } from 'polished';
import ChatService from '../../../service/chat/service';
import SockJs from 'sockjs-client';
import Stomp from 'stompjs';
import useCookies from '../../../utils/useCookies';
import { useRouter } from 'next/router';
import ModalBox from '../../common/modal';
import usersService from '../../../service/users/service';
import useToast from '../../../utils/useToast';

interface ChatListDrawerProps {
	readonly isOpen: boolean;
	readonly toggleDrawer: (prev: boolean) => void;
}

let stompClient = null;

export default function ChatListModal(props: ChatListDrawerProps) {
	const router = useRouter();
	const { getCookie, checkLogin } = useCookies();
	const { isOpen, toggleDrawer } = props;

	// 유저 모달 활성화 visible
	// const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);

	const [userNickNameData, setUserNickNameDate] = useState<string>('');

	const [chatRoomVisible, setChatRoomVisible] = useState(false);
	const [chatList, setChatList] = useState([]);
	const [chatRoomList, setChatRoomList] = useState([]);
	const [messageValue, setMessageValue] = useState('');
	const [chatRoomId, setChatRoomId] = useState('');

	const chatToggleModal = () => {
		// setChatRoomVisible(!isUserInfoModalOpen);
		if (stompClient !== null) {
			stompClient.disconnect();
		}
	};

	const closeChatModal = () => {
		setChatRoomVisible(false);
		if (stompClient !== null) {
			stompClient.disconnect();
		}
	};

	// 채팅방 목록 불러오기
	const getChatListData = async () => {
		try {
			const res = await ChatService.getChatList();
			console.log('res', res.data.response);
			setChatRoomList(res.data.response);
		} catch (e) {
			console.log(e);
		}
	};

	// 채팅방 입장
	const onConnectChat = (matchingId) => {
		const headers = {
			Authorization: 'Bearer ' + getCookie('accessToken'),
			matchingId,
			connectType: 'room',
		};
		const socket = new SockJs(`https://racket-puncher.store/ws`);
		stompClient = Stomp.over(socket);

		setChatRoomId(matchingId);
		stompClient.connect(
			headers,
			async (frame) => {
				console.log('Connected: ' + frame);
				setChatRoomVisible(true);
				getPreviousMessage(matchingId);
				await stompClient.subscribe(
					`/topic/${matchingId}`,
					(messageOutput) => {
						if (messageOutput.command === 'MESSAGE') {
							getPreviousMessage(matchingId);
						}
					},
					(error) => {
						console.log('subscribe error', error);
					}
				);
			},
			(error) => {
				console.log('Connection error: ' + error);
			}
		);
	};

	// 지난 채팅 내역 불러오기
	const getPreviousMessage = async (matchingId) => {
		const payload = {
			matchingId,
		};
		try {
			const res = await ChatService.getPreviousMessageData(payload);
			setChatList(res.data.response);
			console.log('res', res);
		} catch (e) {
			console.log('e', e);
		}
	};

	// 메시지 보내기
	const sendMessage = async (chatRoomId) => {
		stompClient.send(`/app/chat/${chatRoomId}`, {}, JSON.stringify({ content: messageValue }));
	};

	useEffect(() => {
		getChatListData();
	}, []);

	return (
		<>
			<DrawerBox
				isOpen={isOpen}
				height={'75vh'}
				placement={'bottom'}
				toggleDrawer={() => toggleDrawer(isOpen)}>
				<ChatListModalContainer>
					{chatRoomList.map((item) => {
						return (
							<ChatListContainer key={item.id}>
								<p>{item.title}</p>
								<RoundButton
									width={'100px'}
									height={'50px'}
									colorstyle={'is-white-green'}
									onClick={() => {
										onConnectChat(item.matchingId);
									}}>
									입장
								</RoundButton>
							</ChatListContainer>
						);
					})}
				</ChatListModalContainer>
			</DrawerBox>
			<ModalBox
				isOpen={chatRoomVisible}
				heightType={false}
				toggleModal={chatToggleModal}
				onCancel={closeChatModal}>
				<ChatBoxes>
					<input
						value={messageValue}
						type='text'
						onChange={(e) => {
							setMessageValue(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							sendMessage(chatRoomId);
						}}>
						보내기
					</button>
					<div className='chat-list-wrap'>
						{chatList.map((item) => {
							return (
								<>
									{item.senderNickname === 'admin' && (
										<>
											<p className='center-title'>{item.content}</p>
										</>
									)}
									{item.senderNickname !== 'admin' && item.senderNickname === userNickNameData && (
										<>
											<p className='right-title'>{item.content}</p>
										</>
									)}
									{item.senderNickname !== 'admin' && item.senderNickname !== userNickNameData && (
										<>
											<p className='left-title'>{item.content}</p>
										</>
									)}
								</>
							);
						})}
					</div>
				</ChatBoxes>
			</ModalBox>
		</>
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

const ChatBoxes = styled.div`
	background-color: yellow;
	div.chat-list-wrap {
		p {
			&.center-title {
				text-align: center;
			}
			&.left-title {
				text-align: left;
			}
			&.right-title {
				text-align: right;
			}
		}
	}
`;
