import styled from 'styled-components';
import { ImageBox } from '../../../../styles/ts/components/box';
import { prefix } from '../../../../constants/prefix';
import { SquareButton } from '../../../../styles/ts/components/buttons';
import React, { useState } from 'react';
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


export default function EvaluationCard() {
	const [goodCardData, setGoodCardData] = useState([
		{
			label: '친절해요1',
			isActive: true,
		},
		{
			label: '친절해요2',
			isActive: false,
		},
		{
			label: '친절해요3',
			isActive: false,
		},
		{
			label: '친절해요4',
			isActive: false,
		},
		{
			label: '친절해요5',
			isActive: false,
		},
	]);

	const [badCardData, setBadCardData] = useState([
		{
			label: '노쇼했어요1',
			isActive: true,
		},
		{
			label: '노쇼했어요2',
			isActive: false,
		},
		{
			label: '노쇼했어요3',
			isActive: false,
		},
		{
			label: '노쇼했어요4',
			isActive: false,
		},
		{
			label: '노쇼했어요5',
			isActive: false,
		},
	]);

	const onClickItem = (item: any) => {
		item.isActive = !item.isActive;
		console.log('item', item);
	};

	return (
		<>
			<EvaluationCardContainer>
				<EvaluationCardBox>
					<ProfileContainer>
						<ProfileImgBox>
							<ImageBox width='80px' height='80px'>
								<img src={`${prefix}/images/profile-img.png`} alt='profile-img' />
							</ImageBox>
						</ProfileImgBox>

						<ProfileTextBox>TESTER-1</ProfileTextBox>
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
										className="mySwiper"
									>
										{goodCardData.map((item, index) => {
											return (
												<>
													<SwiperSlide>
														<SquareButton
															width='150px'
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
										className="mySwiper"
									>
										{badCardData.map((item, index) => {
											return (
												<>
													<SwiperSlide>
														<SquareButton
															width='150px'
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
	padding: 10px;
	margin-bottom: 20px;
`;
const EvaluationCardBox = styled.div``;
const ProfileContainer = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	margin-bottom: 20px;
`;
const ProfileImgBox = styled.div``;
const ProfileTextBox = styled.div`
	color: ${InputLabelColor};
	font-family: ${FontFamilyMedium};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
`;
const CardBoxes = styled.div``;
const ButtonArea = styled.div`
	margin-right: 9px;
`;
const Cards = styled.div`
	&:first-child {
		margin-bottom: 10px;
	}
`;
