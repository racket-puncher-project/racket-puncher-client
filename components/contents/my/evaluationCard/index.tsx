import styled from 'styled-components';
import { ImageBox } from '../../../../styles/ts/components/box';
import { prefix } from '../../../../constants/prefix';
import { SquareButton } from '../../../../styles/ts/components/buttons';
import React, { useEffect, useState } from 'react';
import {
	FontFamilyMedium,
	FontSizeLg,
	InputBorderColor,
	InputLabelColor,
} from '../../../../styles/ts/common';
import { rem } from 'polished';
import { pxToRem } from '../../../../utils/formatter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

export default function EvaluationCard({
	reviewMemberList,
	reviewMemberItem,
	setReviewMemberList,
}) {
	const [goodCardData, setGoodCardData] = useState([
		{
			value: 'KIND',
			label: '친절해요',
			isActive: true,
		},
		{
			value: 'PUNCTUAL',
			label: '약속 시간을 잘 지켜요',
			isActive: false,
		},
		{
			value: 'GOOD_MANNER',
			label: '매너가 좋아요',
			isActive: false,
		},
		{
			value: 'HELPFUL',
			label: '경기 진행 과정에서 도움을 줬어요',
			isActive: false,
		},
		{
			value: 'PROACTIVE',
			label: '경기에 적극적으로 임해요',
			isActive: false,
		},
	]);

	const [badCardData, setBadCardData] = useState([
		{
			value: 'NO_SHOW',
			label: '노쇼했어요',
			isActive: true,
		},
		{
			value: 'FALSE_MATCHING',
			label: '허위 매칭글이에요',
			isActive: false,
		},
		{
			value: 'CYBER_BULLYING',
			label: '채팅방에서 욕설을 했어요',
			isActive: false,
		},
		{
			value: 'SPORTS_MISCONDUCT',
			label: '경기 중에 욕설을 했어요',
			isActive: false,
		},
		{
			value: 'AGGRESSIVE',
			label: '행동이 과격해요',
			isActive: false,
		},
		{
			value: 'MAKING_UNCOMFORTABLE',
			label: '다른 참가자를 불편하게 해요',
			isActive: false,
		},
		{
			value: 'INCONSIDERATE',
			label: '배려심이 부족해요',
			isActive: false,
		},
	]);

	useEffect(() => {
		const processGoodCardData = goodCardData
			.filter((goodCardItem) => goodCardItem.isActive)
			.map((goodCardProcessItem) => goodCardProcessItem.value);
		const processBadCardData = badCardData
			.filter((badCardDataItem) => badCardDataItem.isActive)
			.map((badCardProcessItem) => badCardProcessItem.value);

		const updateList = reviewMemberList.map((reviewMemberListItem) => {
			if (reviewMemberListItem.id === reviewMemberItem.id) {
				return {
					...reviewMemberListItem,
					positiveReviews: processGoodCardData,
					negativeReviews: processBadCardData,
				};
			} else {
				return {
					...reviewMemberListItem,
				};
			}
		});

		setReviewMemberList(updateList);
	}, [goodCardData, badCardData]);

	return (
		<>
			<EvaluationCardContainer>
				<EvaluationCardBox>
					<ProfileContainer>
						<ProfileImgBox>
							<ImageBox width='80px' height='80px'>
								<img src={`${reviewMemberItem.profileImg}`} alt='profile-img' />
							</ImageBox>
						</ProfileImgBox>

						<ProfileTextBox>{reviewMemberItem.nickname}</ProfileTextBox>
					</ProfileContainer>

					<CardBoxes>
						<Cards>
							<ButtonArea>
								<>
									<Swiper
										slidesPerView={3}
										spaceBetween={0}
										freeMode={true}
										modules={[FreeMode]}
										className='mySwiper'>
										{goodCardData.map((item, index) => {
											return (
												<>
													<SwiperSlide>
														<SquareButton
															height='40px'
															colorstyle={item.isActive ? 'is-green' : 'is-whiteBlack'}
															bordercolor={item.isActive ? 'is-green' : 'is-whiteBlack'}
															onClick={() => {
																setGoodCardData(
																	goodCardData.map((innerItem, innerIndex) => {
																		if (innerIndex === index) {
																			return {
																				...innerItem,
																				isActive: !innerItem.isActive,
																			};
																		}
																		return innerItem;
																	})
																);
															}}>
															{item.label}
														</SquareButton>
													</SwiperSlide>
												</>
											);
										})}
									</Swiper>
								</>
							</ButtonArea>
						</Cards>

						<Cards>
							<ButtonArea>
								<>
									<Swiper
										slidesPerView={3}
										spaceBetween={0}
										freeMode={true}
										modules={[FreeMode]}
										className='mySwiper'>
										{badCardData.map((item, index) => {
											return (
												<>
													<SwiperSlide>
														<SquareButton
															height='40px'
															colorstyle={item.isActive ? 'is-green' : 'is-whiteBlack'}
															bordercolor={item.isActive ? 'is-green' : 'is-whiteBlack'}
															onClick={() => {
																setBadCardData(
																	badCardData.map((innerItem, innerIndex) => {
																		if (innerIndex === index) {
																			return {
																				...innerItem,
																				isActive: !innerItem.isActive,
																			};
																		}
																		return innerItem;
																	})
																);
															}}>
															{item.label}
														</SquareButton>
													</SwiperSlide>
												</>
											);
										})}
									</Swiper>
								</>
							</ButtonArea>
						</Cards>
					</CardBoxes>
				</EvaluationCardBox>
			</EvaluationCardContainer>
		</>
	);
}

const EvaluationCardContainer = styled.div`
	border-radius: 10px;
	border: 1px solid ${InputBorderColor};
	padding: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
`;
const EvaluationCardBox = styled.div``;
const ProfileContainer = styled.div`
	display: flex;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	align-items: center;
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
`;
const ProfileImgBox = styled.div``;
const ProfileTextBox = styled.div`
	color: ${InputLabelColor};
	font-family: ${FontFamilyMedium};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
`;
const CardBoxes = styled.div``;
const ButtonArea = styled.div`
	margin-right: ${(props) => (props.theme.isResponsive ? pxToRem('9px') : rem('9px'))};
	div.swiper {
		div.swiper-wrapper {
			div.swiper-slide {
				width: auto !important;
				margin-right: 10px;
			}
		}
	}
`;
const Cards = styled.div`
	&:first-child {
		margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	}
`;
