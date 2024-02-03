import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { SquareButton } from '../../../styles/ts/components/buttons';
import { ImageBox } from '../../../styles/ts/components/box';
import {
	BlackColor,
	WhiteColor,
	FontFamilySemiBold,
	FontSizeLg,
	LightGrayColor,
} from '../../../styles/ts/common';
import UserInfoModal from './userInfoModal';
import ReportUserModal from './reportUserModal';
import { pxToRem } from '../../../utils/formatter';
import usersService from '../../../service/users/service';
import useToast from '../../../utils/useToast';

interface IPlayerCardProps {
	nickname: string;
	profileImg: string;
	userId: number;
}

export default function PlayerCard(props: IPlayerCardProps) {
	const { setMessage } = useToast();

	const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
	const toggleUserInfoModal = () => setIsUserInfoModalOpen(!isUserInfoModalOpen);
	const [isReportUserModalOpen, setIsReportUserModalOpen] = useState(false);
	const toggleReportUserModal = () => setIsReportUserModalOpen(!isReportUserModalOpen);
	const [userInfo, setUserInfo] = useState(null);

	const { nickname, profileImg, userId } = props;

	// 회원 정보 열람
	const getUserProfileData = async (userId: number) => {
		try {
			const res = await usersService.getUserProfileData(userId);
			console.log('getUserProfileData', res.data.response);
			setUserInfo(res.data.response);
			setIsUserInfoModalOpen(true);
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	return (
		<>
			<PlayerCardContainer>
				<PlayerPicture>
					<ImageBox width='80px' height='80px'>
						<img src={profileImg} alt='프로필 이미지' />
					</ImageBox>
				</PlayerPicture>
				<PlayerName>{nickname || '라켓왕자'}</PlayerName>
				<ButtonArea>
					<SquareButton
						width='80px'
						height='40px'
						colorstyle='is-black'
						onClick={() => getUserProfileData(userId)}>
						정보
					</SquareButton>
					<SquareButton
						width='80px'
						height='40px'
						colorstyle='is-white'
						bordercolor='is-lightGray'
						onClick={() => setIsReportUserModalOpen(true)}>
						신고
					</SquareButton>
				</ButtonArea>
			</PlayerCardContainer>
			{isUserInfoModalOpen && userInfo && (
				<UserInfoModal
					{...userInfo}
					isOpen={isUserInfoModalOpen}
					toggleModal={() => setIsUserInfoModalOpen(!isUserInfoModalOpen)}
					onCancel={() => setIsUserInfoModalOpen(false)}
				/>
			)}
			<ReportUserModal
				userNickName={nickname}
				profilePicURL={profileImg}
				isOpen={isReportUserModalOpen}
				toggleModal={toggleReportUserModal}
				onCancel={() => setIsReportUserModalOpen(false)}
				onOk={() => setIsReportUserModalOpen(false)}
			/>
		</>
	);
}

const PlayerCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: ${(props) => (props.theme.isResponsive ? pxToRem('100px') : rem('100px'))};
	padding: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	background-color: ${WhiteColor};
	border: solid 1px ${LightGrayColor};
	border-radius: 10px;
`;

const PlayerPicture = styled.div`
	display: inline-block;
	border-radius: 10px;
	overflow: hidden;
`;

const PlayerName = styled.span`
	flex: 1;
	margin: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('20px')}` : `0 ${rem('20px')}`)};
	font-family: ${FontFamilySemiBold};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
	color: ${BlackColor};
`;

const ButtonArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
`;
