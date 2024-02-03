import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { TabsProps } from 'antd';
import { rem } from 'polished';

import { CustomTab } from '../../styles/ts/components/tab';
import { RoundButton } from '../../styles/ts/components/buttons';
import MyProfile, { IProfileProps } from '../../components/contents/my/myProfile';
import MyMatchingList from '../../components/contents/my/myMatchingList';
import useCookies from '../../utils/useCookies';
import useToast from '../../utils/useToast';
import { pxToRem } from '../../utils/formatter';
import usersService from '../../service/users/service';

const MyPage = () => {
	const { checkLogin } = useCookies();
	const { setMessage } = useToast();
	const router = useRouter();

	const [profileData, setProfileData] = useState<IProfileProps['userInfos'] | null>(null);
	// To-do
	// userInfos get 요청

	const items: TabsProps['items'] = [
		{
			key: 'submittedMatchingList',
			label: '등록한 매칭',
			children: <MyMatchingList listType='hosted' />,
		},
		{
			key: 'appliedMatchingList',
			label: '신청한 매칭',
			children: <MyMatchingList listType='applied' />,
		},
	];

	const getUserInfoData = async () => {
		try {
			const res = await usersService.getUserInfo();
			console.log('userInfo', res.data.response);
			setProfileData(res.data.response);
			console.log('profileData', profileData);
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	useEffect(() => {
		if (!checkLogin()) {
			setMessage('error', '로그인이 필요한 서비스입니다.');
			router.replace('/login');
		} else {
			getUserInfoData();
		}
	}, []);

	return (
		<>
			<MyPageAlign>
				{profileData && <MyProfile userInfos={profileData} />}
				<RoundButton colorstyle='is-black' aria-label='프로필 수정페이지로 이동'>
					프로필 수정
				</RoundButton>
				<ListArea>
					<CustomTab defaultActiveKey='1' items={items} />
				</ListArea>
			</MyPageAlign>
		</>
	);
};

export default MyPage;

const MyPageAlign = styled.div`
	padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('30px')}` : `0 ${rem('30px')}`)};
`;

const ListArea = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
`;
