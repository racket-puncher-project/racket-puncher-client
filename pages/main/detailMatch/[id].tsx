import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import { Progress } from 'antd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { ImageBox } from '../../../styles/ts/components/box';
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
import { prefix } from '../../../constants/prefix';
import { pxToRem } from '../../../utils/formatter';
import Service from '../../../service/matches/service';
import { useRouter } from 'next/router';
import UserInfoModal from '../../../components/common/playerCard/userInfoModal';

const testItems = [
	{ id: '0', title: '타이틀 1', index: 1 },
	{ id: '1', title: '타이틀 2', index: 2 },
	{ id: '2', title: '타이틀 3', index: 3 },
	{ id: '3', title: '타이틀 4', index: 4 },
	{ id: '4', title: '타이틀 5', index: 5 },
];

interface DetailMatchContentProps {
	height?: string;
}

export default function DetailMatching() {
	const router = useRouter();

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

	const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);

	const [detailInfo, setDetailInfo] = useState<any>();
	const [recruitStatusModalVisible, setRecruitStatusModalVisible] = useState(false);
	const [recruitList, setRecruitList] = useState({
		beforeList: [],
		afterList: [],
	});

	const toggleUserInfoModal = () => {
		setIsUserInfoModalOpen(!isUserInfoModalOpen);
	};

	const toggleModal = () => {
		setRecruitStatusModalVisible((prev) => !prev);
	};

	const closeRecruitStatusModal = () => {
		setRecruitStatusModalVisible(false);
	};

	const onDragEnd = ({ source, destination }) => {
		if (!destination) return;

		const scourceKey = source.droppableId;
		const destinationKey = destination.droppableId;

		const processArr = JSON.parse(JSON.stringify(recruitList));
		const [targetItem] = processArr[scourceKey].splice(source.index, 1);
		processArr[destinationKey].splice(destination.index, 0, targetItem);
		setRecruitList(processArr);
	};

	// 상세 조회
	const getDetailInfo = async (id: any) => {
		try {
			const res: any = await Service.getDetailMatchingList(id);
			setDetailInfo(res.data.response);
			console.log('res.data.response', res.data.response);
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

	useEffect(() => {
		const exampleData = {
			beforeList: testItems,
			afterList: [],
		};
		setRecruitList(exampleData);
	}, []);

	useEffect(() => {
		if (router.isReady) {
			getDetailInfo(router.query.id);
		}
	}, [router.query]);

	return (
		<>
			<DetailMatchingContainer>
				<ProfileContainer>
					<ProfileBox>
						<ImageWrap>
							<ImageBox width={'140px'} height={'140px'}>
								<img src={detailInfo?.creatorInfo?.profileImg} alt='profile-image' />
							</ImageBox>
							<p>{detailInfo?.creatorInfo?.nickname}</p>
						</ImageWrap>

						<ButtonBox>
							<RoundButton colorstyle={'is-green'} onClick={() => setIsUserInfoModalOpen(true)}>
								등록자 정보
							</RoundButton>
						</ButtonBox>
					</ProfileBox>
				</ProfileContainer>

				<ProgressBarContainer>
					<p>
						“모집 기간이 <span>2</span>일 <span>7</span>시간 남았습니다.“
					</p>
					<Progress
						strokeLinecap='round'
						percent={75}
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
						<DetailMatchItemBox>
							<label htmlFor='detailMatchAge'>연령대</label>
							<DetailMatchContent>
								{ageGroupsInfo.find((el) => el.id === detailInfo?.ageGroup)?.label}
							</DetailMatchContent>
						</DetailMatchItemBox>
						<DetailMatchItemBox>
							<label htmlFor='detailMatchNTRP'>NTRP</label>
							<DetailMatchContent>{detailInfo?.ntrp}</DetailMatchContent>
						</DetailMatchItemBox>
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
						<DetailMatchContent height={'300px'}>
							<div
								className='img-box'
								style={{ backgroundImage: `url(${detailInfo?.locationImg})` }}></div>
						</DetailMatchContent>
					</DetailMatchItemBox>

					<DetailMatchItemBox>
						<label htmlFor='detailMatchInfo'>본문 내용</label>
						<DetailMatchContentArea height={'300px'}>{detailInfo?.content}</DetailMatchContentArea>
					</DetailMatchItemBox>
				</ContentContainer>

				<FloatBox>
					<RoundButton onClick={() => setRecruitStatusModalVisible(true)}>모집 현황</RoundButton>
				</FloatBox>

				{/* 등록자 정보 modal --------------------------------- */}
				<UserInfoModal
					siteUserName={detailInfo?.creatorInfo?.siteUserName}
					nickname={detailInfo?.creatorInfo?.nickname}
					address={detailInfo?.creatorInfo?.address}
					zipCode={detailInfo?.creatorInfo?.zipCode}
					ntrp={detailInfo?.creatorInfo?.ntrp}
					gender={detailInfo?.creatorInfo?.gender}
					mannerScore={detailInfo?.creatorInfo?.mannerScore}
					ageGroup={detailInfo?.creatorInfo?.ageGroup}
					profileImg={detailInfo?.creatorInfo?.profileImg}
					isOpen={isUserInfoModalOpen}
					toggleModal={toggleUserInfoModal}
					onCancel={() => setIsUserInfoModalOpen(false)}
				/>
				{/* 모집현황 modal --------------------------------- */}
				<ModalBox
					isOpen={recruitStatusModalVisible}
					heightType={true}
					toggleModal={toggleModal}
					onCancel={closeRecruitStatusModal}>
					<ModalAlignContainer>
						<div className='modalBoxes'>
							<DragDropContext onDragEnd={onDragEnd}>
								{Object.keys(recruitList).map((key) => (
									<ModalWrapBox key={key}>
										<div className='is-modal-wrap-header'>
											<p>신청인원</p>
											<p>10명</p>
										</div>
										<Droppable key={key} droppableId={key}>
											{(provided) => (
												<div
													className='is-modal-wrap-body'
													{...provided.droppableProps}
													ref={provided.innerRef}>
													{recruitList[key].map((item, index) => (
														<Draggable key={item.id} draggableId={item.id} index={index}>
															{(provided) => (
																<div
																	ref={provided.innerRef}
																	{...provided.draggableProps}
																	{...provided.dragHandleProps}>
																	<ModalWrapItem>
																		<div className='box-top'>
																			<ImageBox width='80px' height='80px'>
																				<img src='/images/main-img1.png' alt='image' />
																			</ImageBox>
																			<p>뿡뿡이 {item.index}</p>
																		</div>
																		<div className='box-footer'>
																			<div className='is-btn black'>정보</div>
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
								))}
							</DragDropContext>
						</div>
						<ButtonBox>
							<RoundButton colorstyle={'is-black'}>모집완료</RoundButton>
						</ButtonBox>
					</ModalAlignContainer>
				</ModalBox>
			</DetailMatchingContainer>
		</>
	);
}

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
const ControlBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin: ${(props) => (props.theme.isResponsive ? `${pxToRem('30px')} 0` : `${rem('30px')} 0`)};
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
		max-width: ${(props) => (props.theme.isResponsive ? pxToRem('540px') : rem('540px'))};
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
