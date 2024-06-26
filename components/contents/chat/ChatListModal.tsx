import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { RoundButton } from '../../../styles/ts/components/buttons';
import DrawerBox from '../../common/drawer';
import {
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	PrimaryColor,
	WhiteColor,
} from '../../../styles/ts/common';
import { chatTimeFormatter, pxToRem } from '../../../utils/formatter';
import { rem } from 'polished';
import ChatService from '../../../service/chat/service';
import SockJs from 'sockjs-client';
import Stomp from 'stompjs';
import useCookies from '../../../utils/useCookies';
import ModalBox from '../../common/modal';
import usersService from '../../../service/users/service';
import useToast from '../../../utils/useToast';
import { ImageBox } from '../../../styles/ts/components/box';
import { prefix } from '../../../constants/prefix';

interface ChatListDrawerProps {
	readonly isOpen: boolean;
	readonly toggleDrawer: (prev: boolean) => void;
}

let stompClient = null;

export default function ChatListModal(props: ChatListDrawerProps) {
	const { getCookie } = useCookies();
	const { setMessage } = useToast();
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

	// 유저 조회 (본인)
	const getMyInfoData = async () => {
		try {
			const res = await usersService.getUserInfo();
			console.log('res', res);
			setUserNickNameDate(res.data.response.nickname);
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
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
		setChatRoomVisible(true);
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
		getMyInfoData();
	};

	// 지난 채팅 내역 불러오기
	const getPreviousMessage = async (matchingId) => {
		const payload = {
			matchingId,
		};
		try {
			const res = await ChatService.getPreviousMessageData(payload);
			setChatList(res.data.response);
			console.log('chatList', chatList);
		} catch (e) {
			console.log('e', e);
		}
	};

	// 메시지 보내기
	const sendMessage = async (chatRoomId, message) => {
		if (!stompClient) {
			console.error('stompClient 가 초기화되어야 함');
			return;
		}

		console.log('stompClient', stompClient);
		console.log('chatRoomId', chatRoomId);
		console.log('test');

		await stompClient.send(`/app/chat/${chatRoomId}`, {}, JSON.stringify({ content: message }));
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && messageValue) {
			sendMessage(chatRoomId, messageValue);
			setMessageValue('');
		}
	};

	useEffect(() => {
		const contentsEl = document.getElementsByClassName('ant-modal-content');
		if (contentsEl.length > 0) {
			const lastElement = contentsEl[0];
			lastElement.scrollTop = lastElement.scrollHeight;
		}
	}, [chatList]);

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
					{chatRoomList?.map((item) => {
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
				onCancel={closeChatModal}
				isChatModal={true}
				isFooterFixed={true}
				footerButtons={[
					<SendMessageWrapper key={'messageValue'}>
						<ChatInputBox>
							<input
								value={messageValue}
								onKeyPress={(e) => {
									handleKeyDown(e);
								}}
								onChange={(e) => {
									setMessageValue(e.target.value);
								}}
							/>
						</ChatInputBox>

						<SendMessageBox
							onClick={() => {
								sendMessage(chatRoomId, messageValue);
								setMessageValue('');
							}}>
							<ImageBox width={'50px'} height={'50px'}>
								<img src={`${prefix}/svg/send-message.svg`} alt='send-message' />
							</ImageBox>
						</SendMessageBox>
					</SendMessageWrapper>,
				]}>
				<ChatBoxes>
					<ChatListWrap>
						{chatList.map((chatItem, chatIndex) => {
							return (
								<div key={'chatItem' + chatIndex}>
									{/* {chatItem.senderNickname === 'admin' && ( */}
									{/*	<> */}
									{/*		<p className='center-title'>{chatItem.content}</p> */}
									{/*	</> */}
									{/* )} */}
									{chatItem.senderNickname !== 'admin' &&
										chatItem.senderNickname === userNickNameData && (
											<MyChatList>
												<div className='content-box'>
													<p className='content-title'>{chatItem.content}</p>
													<p className='right-title'>{chatTimeFormatter(chatItem.sentTime)}</p>
												</div>
											</MyChatList>
										)}
									{chatItem.senderNickname !== 'admin' &&
										chatItem.senderNickname !== userNickNameData && (
											<OtherChatList>
												<div className='left-box'>
													<div className='img-box'>
														<img src={chatItem.senderProfileImg} />
													</div>
												</div>
												<div className='right-box'>
													<p className='title'>{chatItem.senderNickname}</p>
													<div className='content-box'>
														<p className='content-title'>{chatItem.content}</p>
														<p className='right-title'>{chatTimeFormatter(chatItem.sentTime)}</p>
													</div>
												</div>
											</OtherChatList>
										)}
								</div>
							);
						})}
					</ChatListWrap>
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
	background-color: #ffffff;
`;

const ChatListWrap = styled.div`
	/* height: 77vh;
	overflow: scroll; */
`;

const SendMessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 15px;
	align-items: center;
`;

const ChatInputBox = styled.div`
	width: 100%;
	input {
		width: 100%;
		height: ${(props) => (props.theme.isResponsive ? pxToRem('70px') : rem('70px'))};
		border: 1px solid ${InputBorderColor};
		background: ${InputBoxColor};
		border-radius: 5px;
		padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('15px')}` : `0 ${rem('15px')}`)};
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpSm) : rem(FontSizeSpSm))};
		&:focus {
			border: 1px solid ${PrimaryColor};
			outline: none;
		}
	}
`;

const SendMessageBox = styled.div`
	width: ${(props) => (props.theme.isResponsive ? pxToRem('110px') : rem('110px'))};
	height: ${(props) => (props.theme.isResponsive ? pxToRem('70px') : rem('70px'))};
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${PrimaryColor};
`;

const MyChatList = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin-bottom: 10px;
	div.content-box {
		width: 80%;
		background-color: #f1fff2;
		border-radius: 10px;
		padding: 15px;
		p {
			font-family: Pretendard-Regular;
			&.right-title {
				color: #656565;
				text-align: right;
				font-size: 10px;
			}
		}
	}
`;
const OtherChatList = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 10px;
	div.left-box {
		margin-right: 15px;
		div.img-box {
			width: 30px;
			img {
				display: block;
				width: 100%;
			}
		}
	}
	div.right-box {
		width: 80%;
		p.title {
			font-size: 14px;
			font-family: Pretendard-Bold;
			text-align: left;
		}
		div.content-box {
			background-color: #f1fff2;
			border-radius: 10px;
			padding: 15px;
			p {
				font-family: Pretendard-Regular;
				&.right-title {
					color: #656565;
					text-align: right;
					font-size: 10px;
				}
			}
		}
	}
`;
