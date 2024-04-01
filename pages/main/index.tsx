import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import type { TabsProps } from 'antd';

import { ImageBox } from '../../styles/ts/components/box';
import MatchingList from '../../components/contents/main/matchingList';
import MyAroundMatching from '../../components/contents/main/myAroundMatching';
import { CustomTab } from '../../styles/ts/components/tab';
import useRouterHook from '../../utils/useRouterHook';
import { prefix } from '../../constants/prefix';
import { pxToRem } from '../../utils/formatter';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChatRoom from '../../components/contents/chat/ChatRoom';
import MenuDrawer from '../../components/layouts/MenuDrawer';
import ChatListModal from '../../components/contents/chat/ChatListModal';

const items: TabsProps['items'] = [
	{
		key: 'matchingList',
		label: '매칭리스트',
		children: <MatchingList />,
	},
	{
		key: 'myAroundMatching',
		label: '내 주변 매칭',
		children: <MyAroundMatching />,
	},
];

export default function MainPage() {
	return (
		<>
			<MainViewContainer>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}>
					<SwiperSlide>
						<ImageBox width={'640px'} heightInit={true}>
							<img src={`${prefix}/images/main-slider-image.png`} alt='main-slider-img' />
						</ImageBox>
					</SwiperSlide>
					<SwiperSlide>
						<ImageBox width={'640px'} heightInit={true}>
							<img src={`${prefix}/images/main-slider-image.png`} alt='main-slider-img' />
						</ImageBox>
					</SwiperSlide>
					<SwiperSlide>
						<ImageBox width={'640px'} heightInit={true}>
							<img src={`${prefix}/images/main-slider-image.png`} alt='main-slider-img' />
						</ImageBox>
					</SwiperSlide>
				</Swiper>
				<MainContainer>
					<CustomTab defaultActiveKey='1' items={items} />
					<ChatRoom />
				</MainContainer>
			</MainViewContainer>
		</>
	);
}

const MainViewContainer = styled.div``;

const MainContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('30px')}` : `0 ${rem('30px')}`)};
`;
