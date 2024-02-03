import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import MyListItem, { IPostInfo } from '../collapse';

import { pxToRem } from '../../../../utils/formatter';
import usersService from '../../../../service/users/service';
import useToast from '../../../../utils/useToast';

interface IMyMatchingListProps {
	listType: 'hosted' | 'applied';
}

export default function MyMatchingList(props: IMyMatchingListProps) {
	const { listType } = props;

	const [hostedData, setHostedData] = useState<IPostInfo[] | []>([]);
	const [appliedData, setAppliedData] = useState<IPostInfo[] | []>([]);

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
			<MyListContainer>
				{listType === 'hosted' && hostedData.length > 0 ? (
					<MyListItem postInfo={hostedData} />
				) : listType === 'applied' && appliedData.length > 0 ? (
					<MyListItem postInfo={appliedData} />
				) : null}
			</MyListContainer>
		</>
	);
}

const MyListContainer = styled.ul`
	min-width: 100%;
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
`;
