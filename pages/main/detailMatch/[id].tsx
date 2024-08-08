import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import { Progress } from 'antd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { BackgroundImageBox, ImageBox } from '../../../styles/ts/components/box';
import {
	BlackColor,
	FontSizeLg,
	FontSizeSm,
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	InputLabelColor,
	PlayerListBGColor,
	PrimaryColor,
} from '../../../styles/ts/common';
import { RoundButton } from '../../../styles/ts/components/buttons';
import ModalBox from '../../../components/common/modal';
import { pxToRem } from '../../../utils/formatter';
import Service from '../../../service/matches/service';
import { useRouter } from 'next/router';
import UserInfoModal from '../../../components/common/playerCard/userInfoModal';
import moment from 'moment';
import useCookies from '../../../utils/useCookies';
import usersService from '../../../service/users/service';
import ApplyService from '../../../service/apply/service';
import useToast from '../../../utils/useToast';
import SockJs from 'sockjs-client';
import Stomp from 'stompjs';
import ChatService from '../../../service/chat/service';
import { prefix } from '../../../constants/prefix';

interface DetailMatchContentProps {
	height?: string;
}

let stompClient = null;

export default function DetailMatching() {
	const router = useRouter();
	const { setMessage } = useToast();
	const { getCookie, checkLogin } = useCookies();

	// 모집연령 enum
	const ageGroupsInfo = [
		{
			id: 'TWENTIES',
			label: '20대',
		},
		{
			id: 'THIRTIES',
			label: '30대',
		},
		{
			id: 'FORTIES',
			label: '40대',
		},
		{
			id: 'SENIOR',
			label: '50대',
		},
	];

	// 매칭타입 enum
	const matchingTypeInfo = [
		{
			id: 'SINGLE',
			label: '단식',
		},
		{
			id: 'DOUBLE',
			label: '복식',
		},
		{
			id: 'MIXED_DOUBLE',
			label: '혼성 복식',
		},
		{
			id: 'OTHER',
			label: '기타',
		},
	];

	// 유저 모달 활성화 visible
	const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
	// 모집 현황 모달 활성화 visible
	const [recruitStatusModalVisible, setRecruitStatusModalVisible] = useState(false);
	// 매칭 상세에 진입한 사용자 권한
	const [authorityValue, setAuthorityValue] = useState<any>();

	// 유저정보
	const [userInfo, setUserInfo] = useState<any>();
	// 상세정보
	const [detailInfo, setDetailInfo] = useState<any>();

	// 모집 종료까지 남은 시간 (일, 시간, 분)
	const [recruitInfo, setRecruitInfo] = useState<any[]>([0, 0, 0]);

	// 모집 종료까지 남은 시간 퍼센트
	const [recruitPercentage, setRecruitPercentage] = useState<any>();
	const [recruitList, setRecruitList] = useState({
		beforeList: [],
		afterList: [],
	});

	// 참가 신청 여부
	const [isReqMatching, setIsReqMatching] = useState<boolean>(false);
	// 신청자 아이디
	const [applyIdData, setApplyIdData] = useState<string>('');
	// 유저 아이디
	const [userIdData, setUserIdData] = useState<string>('');
	const [userNickNameData, setUserNickNameDate] = useState<string>('');

	const [chatRoomVisible, setChatRoomVisible] = useState(false);
	const [chatList, setChatList] = useState([]);
	const [messageValue, setMessageValue] = useState('');

	const toggleUserInfoModal = () => {
		setIsUserInfoModalOpen(!isUserInfoModalOpen);
	};

	const toggleModal = () => {
		setRecruitStatusModalVisible((prev) => !prev);
	};

	const chatToggleModal = () => {
		setChatRoomVisible(!isUserInfoModalOpen);
		if (stompClient !== null) {
			stompClient.disconnect();
		}
	};

	const closeRecruitStatusModal = () => {
		setRecruitStatusModalVisible(false);
	};

	const closeChatModal = () => {
		setChatRoomVisible(false);
		if (stompClient !== null) {
			stompClient.disconnect();
		}
	};

	const onDragEnd = ({ source, destination }) => {
		if (!destination || destination.droppableId === null) return;

		const scourceKey = source.droppableId;
		const destinationKey = destination.droppableId;

		// recruitList 깊은 복사본 생성
		const processArr = JSON.parse(JSON.stringify(recruitList));
		// 드래그된 아이템 추출 + 원본 위치에서 제거
		const [targetItem] = processArr[scourceKey].splice(source.index, 1);
		// 아이템을 새 위치에 삽입
		processArr[destinationKey].splice(destination.index, 0, targetItem);
		setRecruitList(processArr);
		acceptMatchingApplication(processArr);
	};

	// 상세 조회 api
	const getDetailInfo = async (id: any) => {
		try {
			const res: any = await Service.getDetailMatchingList(id);
			setDetailInfo(res.data.response);
			setUserInfo({ ...res.data.response.creatorInfo });
			checkRecruitDate(
				moment().format('YYYY-MM-DDTHH:mm:ss'),
				res.data.response.recruitDueDateTime
			);
			convertRecruitPercentage(
				moment().format('YYYY-MM-DDTHH:mm:ss'),
				res.data.response.createTime,
				res.data.response.recruitDueDateTime
			);
			// 로그인 체크
			if (checkLogin()) {
				// 유저 정보 조회
				await getMyInfoData(res.data.response.creatorInfo.id);
				// 모집 현황 조회
				getRecruitListInfo(router.query.id);
			} else {
				setAuthorityValue('NON_MEMBER');
			}

			// 카카오 맵 관련
			const staticMapContainer = document.getElementById('staticMap');
			const markerPosition = new kakao.maps.LatLng(res.data.response.lat, res.data.response.lon);
			const marker = {
				position: markerPosition,
			};
			const staticMapOption = {
				center: new kakao.maps.LatLng(res.data.response.lat, res.data.response.lon),
				level: 2,
				marker,
			};

			const staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
		} catch (e) {
			console.log('e', e);
		}
	};

	// 매칭 수정 이동
	const onClickMoveEdit = () => {
		router.push(`/editMatching/${router.query.id}`);
	};

	// 매칭별 신청 현황 조회 (모집 현황)
	const getRecruitListInfo = async (id: any) => {
		try {
			const res = await Service.getMatchingApplyState(id);
			let processData = null;
			if (res.data.response.appliedMembers) {
				processData = {
					beforeList: res.data.response.appliedMembers ? res.data.response.appliedMembers : [],
					afterList: res.data.response.acceptedMembers ? res.data.response.acceptedMembers : [],
				};
			} else {
				processData = {
					afterList: res.data.response.acceptedMembers ? res.data.response.acceptedMembers : [],
				};
			}
			setRecruitList(processData);
			setIsReqMatching(res.data.response.isApplied);

			console.log('res', res);

			// 내 신청 데이터 내역 가공
			const myAppliedData = res.data.response.acceptedMembers.filter(
				(item) => item.siteUserId === userIdData
			);
			setApplyIdData(myAppliedData[0].applyId);
		} catch (e) {
			console.log('e', e);
		}
	};

	// 모집 시간을 뿌려주기 위한 메서드
	const checkRecruitDate = (startDate: any, endDate: any) => {
		const recruitDateStart = moment(startDate);
		const recruitDateEnd = moment(endDate);

		const duration = moment.duration(recruitDateEnd.diff(recruitDateStart));

		const days = Math.floor(duration.asDays());
		const hours = Math.floor(duration.asHours() % 24);
		const minutes = Math.floor(duration.asMinutes() % 60);

		setRecruitInfo([days, hours, minutes]);
	};

	// 종료 일자를 퍼센트 변환
	const convertRecruitPercentage = (nowDate: any, startDate: any, endDate: any) => {
		const start = moment(startDate);
		const end = moment(endDate);
		const now = moment(nowDate);

		// 전체 모집 기간을 초 단위로 계산
		const totalDuration = end.diff(start, 'seconds');

		// 모집 시작 시간부터 현재 시간까지 경과한 시간을 초 단위로 계산
		const elapsedDuration = end.diff(now, 'seconds');

		const percentage = (elapsedDuration / totalDuration) * 100;

		// 남은 시간의 퍼센트 반환
		setRecruitPercentage(percentage.toFixed(2));
	};

	// 유저 조회(본인)
	const getMyInfoData = async (matchingId: any) => {
		try {
			const res = await usersService.getUserInfo();
			// 권한 체크
			checkAuthorityValue(matchingId, res.data.response.id);
			setUserIdData(res.data.response.id);
			console.log('userId', res);
			setUserNickNameDate(res.data.response.nickname);

			return res.data.response.id;
		} catch (e) {
			console.log('e', e);
			if (e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	// 유저 조회(다른 사람)
	const getUserInfoData = async (id: any) => {
		try {
			const res = await usersService.getUserProfileData(id);
			setUserInfo({ ...res.data.response });
			setTimeout(() => {
				setIsUserInfoModalOpen(true);
			}, 100);
		} catch (e) {
			console.log('e', e);
			if (e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	// 권한 체크
	const checkAuthorityValue = (matchingId: any, userId: any) => {
		// 회원인데 게시물 등록자가 본인인경우
		if (checkLogin() && matchingId === userId) {
			setAuthorityValue('MEMBER_MY');
		} else {
			// 회원인데 게시물 등록자가 본인이 아닌 경우
			setAuthorityValue('MEMBER_CUSTOMER');
		}
	};

	// 신청 여부에 따라 컨트롤
	const handleMatchingApplication = () => {
		if (isReqMatching) {
			cancelMatchingApplication();
		} else {
			requestMatching();
		}
	};

	// 참가 신청 (알림)
	const requestMatching = async () => {
		try {
			const res = await ApplyService.regMatchingData(router.query.id);
			setIsReqMatching(true);
			setMessage('success', '신청완료');
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 400 || e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	// 참가 신청 취소
	// (매칭상태가 FULL인 경기일 경우, 경기 매칭 확정 상태 변경 및 패널티 부여, 알림)
	const cancelMatchingApplication = async () => {
		console.log('applyIdData', applyIdData);
		try {
			const res = await ApplyService.cancelMatchingData(applyIdData);
			setIsReqMatching(false);
			setMessage('success', '신청취소');
			getRecruitListInfo(router.query.id);
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 400 || e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	// 참가 신청 수락(알림)
	const acceptMatchingApplication = async (updatedLists: any) => {
		const payload = {
			pendingApplies: updatedLists.beforeList.map((item: any) => item.applyId),
			acceptedApplies: updatedLists.afterList.map((item: any) => item.applyId),
		};

		try {
			const res = await ApplyService.applyMatches(router.query.id, payload);
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 400 || e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
		}
	};
	// 매칭 글 삭제
	const onClickDeleteMatching = () => {
		try {
			Service.deleteMatchingList(router.query.id);
			setMessage('success', '해당 매칭이 삭제되었습니다.');
			router.push('/main');
		} catch (e) {
			console.log('e', e);
			if (e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	// 채팅방 입장
	const onConnectChat = () => {
		const headers = {
			Authorization: 'Bearer ' + getCookie('accessToken'),
			matchingId: router.query.id,
			connectType: 'room',
		};
		const socket = new SockJs(`https://racket-puncher.store/ws`);
		stompClient = Stomp.over(socket);

		stompClient.connect(
			headers,
			async (frame) => {
				console.log('Connected: ' + frame);
				setChatRoomVisible(true);
				getPreviousMessage();
				await stompClient.subscribe(
					`/topic/${router.query.id}`,
					(messageOutput) => {
						if (messageOutput.command === 'MESSAGE') {
							getPreviousMessage();
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

	const getPreviousMessage = async () => {
		const payload = {
			matchingId: router.query.id,
		};
		try {
			const res = await ChatService.getPreviousMessageData(payload);
			setChatList(res.data.response);
		} catch (e) {
			console.log('e', e);
		}
	};

	const sendMessage = async () => {
		stompClient.send(`/app/chat/${router.query.id}`, {}, JSON.stringify({ content: messageValue }));
	};

	useEffect(() => {
		// router 객체가 준비가 되었을때
		if (router.isReady) {
			// 상세 정보 호출
			getDetailInfo(router.query.id);
		}
	}, [router.isReady, router.query.id]);

	useEffect(() => {
		// userIdData 상태가 설정된 후에만 실행
		if (userIdData) {
			const fetchRecruitListInfo = async () => {
				await getRecruitListInfo(router.query.id);
				const myAppliedData = recruitList.afterList.filter(
					(item) => item.siteUserId === userIdData
				);
				if (myAppliedData.length > 0) {
					setApplyIdData(myAppliedData[0].applyId);
				}
			};

			fetchRecruitListInfo();
		}
	}, [userIdData, router.query.id]);

	return (
		<>
			<DetailMatchingContainer>
				<ProfileContainer>
					<ProfileBox>
						<ImageWrap>
							<BackgroundImageBox
								width={'140px'}
								height={'140px'}
								backgroundImage={detailInfo?.creatorInfo?.profileImg}
							/>
							<p>{detailInfo?.creatorInfo?.nickname}</p>
						</ImageWrap>

						<ButtonBox>
							<RoundButton colorstyle={'is-green'} onClick={() => setIsUserInfoModalOpen(true)}>
								등록자 정보
							</RoundButton>
						</ButtonBox>
					</ProfileBox>
				</ProfileContainer>

				{authorityValue === 'MEMBER_MY' && (
					<DetailActionBtnContainer>
						<RoundButton
							onClick={() => {
								onClickMoveEdit();
							}}>
							수정
						</RoundButton>
						<RoundButton
							onClick={() => {
								onClickDeleteMatching();
							}}>
							삭제
						</RoundButton>
					</DetailActionBtnContainer>
				)}

				<ProgressBarContainer>
					<p>
						모집 기간이{' '}
						{recruitInfo.map((recruitItem, recruitIdx) => {
							const labels = ['일', '시간', '분'];
							return (
								<>
									{recruitItem !== 0 && (
										<span>
											{' '}
											{recruitItem}
											{labels[recruitIdx]}
										</span>
									)}
								</>
							);
						})}{' '}
						남았습니다.
					</p>
					<Progress
						strokeLinecap='round'
						percent={recruitPercentage}
						showInfo={false}
						strokeColor={PrimaryColor}
					/>
				</ProgressBarContainer>

				<ContentContainer>
					<DetailMatchItemBox>
						<label htmlFor='detailMatchTitle'>제목</label>
						<DetailMatchContent>{detailInfo?.title}</DetailMatchContent>
					</DetailMatchItemBox>

					<FlexBox>
						<DetailMatchItemBoxHalf>
							<label htmlFor='detailMatchAge'>연령대</label>
							<DetailMatchContent>
								{ageGroupsInfo.find((el) => el.id === detailInfo?.ageGroup)?.label}
							</DetailMatchContent>
						</DetailMatchItemBoxHalf>
						<DetailMatchItemBoxHalf>
							<label htmlFor='detailMatchNTRP'>NTRP</label>
							<DetailMatchContent>{detailInfo?.ntrp}</DetailMatchContent>
						</DetailMatchItemBoxHalf>
					</FlexBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchItem'>매칭 항목</label>
						<DetailMatchContent>
							{matchingTypeInfo.find((el) => el.id === detailInfo?.matchingType)?.label}
						</DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchAddree'>주소</label>
						<DetailMatchContent>{detailInfo?.location}</DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchAddree'>길 찾기</label>
						<MapBox>
							<div id={'staticMap'} style={{ width: '100%', height: '400px' }}></div>
						</MapBox>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchInfo'>구장 이미지</label>
						{detailInfo?.locationImg ? (
							<BackgroundImageBox
								widthInit={true}
								height={'300px'}
								backgroundImage={detailInfo?.locationImg}
							/>
						) : (
							<DetailMatchContent height={'300px'}></DetailMatchContent>
						)}
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchInfo'>본문 내용</label>
						<DetailMatchContentArea height={'300px'}>{detailInfo?.content}</DetailMatchContentArea>
					</DetailMatchItemBox>
				</ContentContainer>

				<FloatBox>
					<RoundButton onClick={() => setRecruitStatusModalVisible(true)}>
						{authorityValue === 'NON_MEMBER' || authorityValue === 'MEMBER_CUSTOMER'
							? '모집 신청'
							: '모집 현황'}
					</RoundButton>
				</FloatBox>

				{/* 등록자 정보 modal --------------------------------- */}
				<UserInfoModal
					{...userInfo}
					isOpen={isUserInfoModalOpen}
					toggleModal={toggleUserInfoModal}
					onCancel={() => setIsUserInfoModalOpen(false)}
				/>
				{/* 모집현황 modal --------------------------------- */}
				<ModalBox
					isOpen={recruitStatusModalVisible}
					heightType={false}
					toggleModal={toggleModal}
					onCancel={closeRecruitStatusModal}>
					<ModalAlignContainer>
						<ModalBoxes>
							<DragDropContext onDragEnd={onDragEnd}>
								{Object.keys(recruitList).map((key) => (
									<ModalWrapBoxContainer key={key}>
										<ModalWrapBox>
											<div className='is-modal-wrap-header'>
												<p>{key === 'beforeList' ? '신청인원' : '참여인원'}</p>
												<p>{recruitList[key].length}명</p>
											</div>
											<Droppable key={key} droppableId={key}>
												{(provided) => (
													<div
														className={'is-modal-wrap-body'}
														{...provided.droppableProps}
														ref={provided.innerRef}>
														{recruitList[key].map((item, index) => (
															<Draggable
																key={item.applyId}
																draggableId={String(item.applyId)}
																isDragDisabled={
																	authorityValue !== 'MEMBER_MY' || item.siteUserId === userInfo.id
																}
																index={index}>
																{(provided) => (
																	<div
																		ref={provided.innerRef}
																		{...provided.draggableProps}
																		{...provided.dragHandleProps}>
																		<ModalWrapItem>
																			<div className='box-top'>
																				<ImageBox width='80px' height='80px'>
																					<img src={`${prefix}/images/main-img1.png`} alt='image' />
																				</ImageBox>
																				<p>{item.nickname}</p>
																			</div>
																			<div className='box-footer'>
																				<div
																					className='is-btn black'
																					onClick={() => getUserInfoData(item.siteUserId)}>
																					정보
																				</div>
																			</div>
																		</ModalWrapItem>
																	</div>
																)}
															</Draggable>
														))}
													</div>
												)}
											</Droppable>
										</ModalWrapBox>
									</ModalWrapBoxContainer>
								))}
							</DragDropContext>
						</ModalBoxes>

						{/* 참여 수락 O --------------------------------- */}
						<>
							{authorityValue === 'MEMBER_MY' ? (
								<></>
							) : (
								<>
									{isReqMatching ? (
										<>
											<ButtonBox onClick={handleMatchingApplication}>
												<RoundButton colorstyle={isReqMatching ? 'is-black' : 'is-disabled'}>
													신청 취소
												</RoundButton>
											</ButtonBox>
										</>
									) : (
										<>
											<ButtonBox onClick={handleMatchingApplication}>
												<RoundButton colorstyle={'is-black'}>신청하기</RoundButton>
											</ButtonBox>
										</>
									)}
								</>
							)}
						</>
					</ModalAlignContainer>
				</ModalBox>
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
						<button onClick={sendMessage}>보내기</button>
						<div className='chat-list-wrap'>
							{chatList.map((item) => {
								return (
									<>
										{item.senderNickname === 'admin' && (
											<p className='center-title'>{item.content}</p>
										)}
										{item.senderNickname !== 'admin' &&
											item.senderNickname === userNickNameData && (
												<p className='right-title'>{item.content}</p>
											)}
										{item.senderNickname !== 'admin' &&
											item.senderNickname !== userNickNameData && (
												<p className='left-title'>{item.content}</p>
											)}
									</>
								);
							})}
						</div>
					</ChatBoxes>
				</ModalBox>
			</DetailMatchingContainer>
		</>
	);
}

const DetailActionBtnContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	button {
		width: ${(props) => (props.theme.isResponsive ? pxToRem('128px') : rem('128px'))}!important;
		&:first-child {
			margin-right: ${(props) =>
				props.theme.isResponsive ? pxToRem('5px') : rem('5px')}!important;
		}
	}
`;

const DetailMatchItemBoxHalf = styled.div`
	display: flex;
	width: 49%;
	flex-direction: column;
	padding-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};

	label {
		display: block;
		font-family: Pretendard-Regular;
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpSm) : rem(FontSizeSpSm))};
		margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
		color: ${InputLabelColor};
	}
`;

const DetailMatchingContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('38px') : rem('38px'))};
	padding-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('100px') : rem('100px'))};
`;
const ProfileContainer = styled.div`
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
`;
const ProfileBox = styled.div`
	height: ${(props) => (props.theme.isResponsive ? pxToRem('347px') : rem('347px'))};
	padding: ${(props) =>
		props.theme.isResponsive
			? `${pxToRem('40px')} ${pxToRem('40px')}`
			: `${rem('40px')} ${rem('40px')}`};
	background-color: ${PlayerListBGColor};
	border-radius: 20px;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const ImageWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('13px') : rem('13px'))};

	p {
		font-family: Pretendard-Medium;
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
		color: ${BlackColor};
	}
`;
const ProgressBarContainer = styled.div`
	p {
		font-family: Pretendard-Medium;
		color: ${InputLabelColor};
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
		text-align: center;
		margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};

		span {
			color: ${PrimaryColor};
		}
	}
`;
const ContentContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
`;
const MapBox = styled.div``;
const DetailMatchItemBox = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};

	label {
		display: block;
		font-family: Pretendard-Regular;
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpSm) : rem(FontSizeSpSm))};
		margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
		color: ${InputLabelColor};
	}
`;
const DetailMatchContent = styled.div<DetailMatchContentProps>`
	height: ${(props) =>
		props.theme.isResponsive
			? props.height
				? pxToRem(props.height)
				: pxToRem('50px')
			: props.height
			  ? rem(props.height)
			  : rem('50px')};
	line-height: ${(props) =>
		props.theme.isResponsive
			? props.height
				? pxToRem(props.height)
				: pxToRem('50px')
			: props.height
			  ? rem(props.height)
			  : rem('50px')};
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	border-radius: 5px;
	padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('15px')}` : `0 ${rem('15px')}`)};
	overflow: hidden;
	div.img-box {
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	&:focus {
		border: 1px solid ${PrimaryColor};
	}
`;

const DetailMatchContentArea = styled.div<DetailMatchContentProps>`
	height: ${(props) =>
		props.theme.isResponsive
			? props.height
				? pxToRem(props.height)
				: pxToRem('50px')
			: props.height
			  ? rem(props.height)
			  : rem('50px')};
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	border-radius: 5px;
	padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('15px')}` : `0 ${rem('15px')}`)};
	padding-top: 10px;

	&:focus {
		border: 1px solid ${PrimaryColor};
	}
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;

	div.id__DetailMatchItemBox-sc-11oq75o-8 {
		flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('280px') : rem('280px'))};

		&:first-child {
			margin-right: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
		}
	}
`;
const ButtonBox = styled.div``;
const FirstButtonBox = styled.div`
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('15px') : rem('15px'))};
`;

const FloatBox = styled.div`
	max-width: ${(props) => (props.theme.isResponsive ? pxToRem('640px') : rem('640px'))};
	width: 100%;
	padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('30px')}` : `0 ${rem('30px')}`)};
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	z-index: 1000;
`;

// 모집현황 모달 --------------------------------------------------------------------

const ModalWrapBoxContainer = styled.div`
	position: relative;
	div.finish-dim {
		border-radius: 20px;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.2); // 투명한 레이어
		z-index: 2; // 적절한 z-index 설정
	}
`;

const ModalWrapBox = styled.div`
	position: relative;
	width: 100%;
	height: ${(props) => (props.theme.isResponsive ? pxToRem('410px') : rem('410px'))};
	border-radius: 20px;
	background: #f9f9f9;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	overflow-y: scroll;
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};

	&::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none;
	scrollbar-width: none;

	div.is-modal-wrap-header {
		position: sticky;
		top: 0;
		// max-width: ${(props) => (props.theme.isResponsive ? pxToRem('540px') : rem('540px'))};
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #84a840;
		border-radius: 20px 20px 0 0;
		padding: ${rem('16px')} ${rem('20px')};
		padding: ${(props) =>
			props.theme.isResponsive
				? `${pxToRem('16px')} ${pxToRem('20px')}`
				: `${rem('16px')} ${rem('20px')}`};

		p {
			color: #fff;
			font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSm) : rem(FontSizeSm))};
		}
	}

	div.is-modal-wrap-body {
		padding: ${(props) =>
			props.theme.isResponsive
				? `${pxToRem('20px')} ${pxToRem('20px')}`
				: `${rem('20px')} ${rem('20px')}`};
	}
`;

const ModalWrapItem = styled.div`
	width: 100%;
	border-radius: 10px;
	border: 1px solid #dcdcdc;
	background: #fff;
	padding: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	cursor: pointer;

	div.box-top {
		display: flex;
		align-items: center;

		p {
			margin-left: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
			font-family: Pretendard-Medium;
			font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
		}
	}

	div.box-footer {
		display: flex;
		align-items: center;
		margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};

		div.is-btn {
			width: 100%;
			text-align: center;
			border-radius: 5px;
			font-family: Pretendard-Medium;
			font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSm) : rem(FontSizeSm))};
			padding: ${(props) =>
				props.theme.isResponsive ? `${pxToRem('10px')} 0` : `${rem('10px')} 0`};

			&.black {
				background-color: black;
				color: #fff;
				margin-right: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
			}

			&.gray {
				border: 1px solid #dcdcdc;
				color: #999;
			}
		}
	}
`;

const ModalAlignContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const ModalBoxes = styled.div``;

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
