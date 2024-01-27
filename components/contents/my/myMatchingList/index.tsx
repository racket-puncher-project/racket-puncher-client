import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import MyListItem, { IPostInfo } from '../collapse';

import { pxToRem } from '../../../../utils/formatter';
import usersService from '../../../../service/users/service';

interface IMyMatchingListProps {
	listType: 'hosted' | 'applied';
}

export default function MyMatchingList(props: IMyMatchingListProps) {
	const { listType } = props;

	const [hostedData, setHostedData] = useState<IPostInfo[] | []>([]);
	const [appliedData, setAppliedData] = useState<IPostInfo[] | []>([]);

	const submittedList = [
		{
			postNum: 1,
			date: '12/09',
			day: '일',
			postTitle: '매너 게임 하실 여성 분들 모여주세요:)',
			userAddress: '서울 강동구',
			matchType: '복식',
			playerList: [
				{
					userNickName: '뿡뿡이',
					userEmail: 'bboongbboong2@gmail.com',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg',
				},
				{
					userNickName: '텐텐2',
					userEmail: 'tenistenis@naver.com',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1691813820762_750.jpeg',
				},
			],
		},
		{
			postNum: 2,
			date: '11/25',
			day: '토',
			postTitle: '실력 같이 키우실 분!!',
			userAddress: '경기 하남시',
			matchType: '단식',
			playerList: [
				{
					userNickName: '김밥처돌이',
					userEmail: 'lovekimbap@gmail.com',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1693052032553_750.jpeg',
				},
				{
					userNickName: 'SeaZero95',
					userEmail: 'haeyoung95@daum.net',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1695367802898_750.jpeg',
				},
			],
		},
		{
			postNum: 3,
			date: '11/07',
			day: '화',
			postTitle: '테니스 내가 짱임',
			userAddress: '서울 강동구',
			matchType: '단식',
			playerList: [
				{
					userNickName: '테니스의공주',
					userEmail: 'princess77@naver.com',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1668760095596_750.jpeg',
				},
				{
					userNickName: '내가짱',
					userEmail: 'lordofsword@daum.net',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1669467945861_750.jpeg',
				},
			],
		},
	];
	const appliedList = [
		{
			postNum: 4,
			date: '11/07',
			day: '화',
			postTitle: '테니스 내가 짱임',
			userAddress: '서울 강동구',
			matchType: '단식',
			playerList: [
				{
					userNickName: '테니스의공주',
					userEmail: 'princess77@naver.com',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1668760095596_750.jpeg',
				},
				{
					userNickName: '내가짱',
					userEmail: 'lordofsword@daum.net',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1669467945861_750.jpeg',
				},
			],
		},
		{
			postNum: 5,
			date: '12/09',
			day: '일',
			postTitle: '매너 게임 하실 여성 분들 모여주세요:)',
			userAddress: '서울 강동구',
			matchType: '복식',
			playerList: [
				{
					userNickName: '뿡뿡이',
					userEmail: 'bboongbboong2@gmail.com',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg',
				},
				{
					userNickName: '텐텐2',
					userEmail: 'tenistenis@naver.com',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1691813820762_750.jpeg',
				},
			],
		},
		{
			postNum: 6,
			date: '11/25',
			day: '토',
			postTitle: '실력 같이 키우실 분!!',
			userAddress: '경기 하남시',
			matchType: '단식',
			playerList: [
				{
					userNickName: '김밥처돌이',
					userEmail: 'lovekimbap@gmail.com',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1693052032553_750.jpeg',
				},
				{
					userNickName: 'SeaZero95',
					userEmail: 'haeyoung95@daum.net',
					profilePicURL:
						'https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1695367802898_750.jpeg',
				},
			],
		},
	];

	// 등록한 매칭 조회
	const getUserHostedList = async () => {
		try {
			const res = await usersService.getUserHostedData();
			console.log('hostedList', res.data.response);
			setHostedData(res.data.response);
		} catch (e) {
			console.log(e);
		}
	};

	// 내가 신청한 매칭 조회
	const getUserAppliedList = async () => {
		try {
			const res = await usersService.getUserAppliedData();
			console.log('appliedList', res.data.response);
			setAppliedData(res.data.response);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getUserHostedList();
		getUserAppliedList();
	}, []);

	return (
		<>
			{listType === 'hosted' && hostedData.length > 0 ? (
				<MyListItem postInfo={hostedData[0]} />
			) : listType === 'applied' && appliedData.length > 0 ? (
				<MyListItem postInfo={appliedData[0]} />
			) : null}
		</>
	);
}

const MyListContainer = styled.ul`
	min-width: 100%;
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
`;
