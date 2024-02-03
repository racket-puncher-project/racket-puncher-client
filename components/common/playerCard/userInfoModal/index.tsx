import React, { useState, ReactNode, ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import ModalBox from '../../modal';
import { ImageBox } from '../../../../styles/ts/components/box';
import {
	BlackColor,
	WhiteColor,
	PrimaryColor,
	FontFamilySemiBold,
	FontSizeLg,
	FontSizeMd,
	FontSizeMc,
} from '../../../../styles/ts/common';
import { pxToRem } from '../../../../utils/formatter';

interface IUserInfoModalProps {
	readonly siteUserName: string;
	readonly nickname: string;
	readonly address: string;
	readonly zipCode: string;
	readonly ntrp: string;
	readonly gender: string;
	readonly mannerScore: number;
	readonly ageGroup: string;
	readonly profileImg: string;
	readonly isOpen: boolean;
	readonly toggleModal: () => void;
	readonly onCancel: () => void;
}

export default function UserInfoModal({
	siteUserName,
	nickname,
	address,
	zipCode,
	ntrp,
	gender,
	mannerScore,
	ageGroup,
	profileImg,
	isOpen,
	toggleModal,
	onCancel,
}: IUserInfoModalProps) {
	return (
		<>
			<ModalBox isOpen={isOpen} toggleModal={toggleModal} onCancel={onCancel}>
				<UserInfoContainer>
					<ProfilePicArea>
						<ImageBox width={'150px'} height={'190px'}>
							<img src={profileImg} alt='프로필 이미지' />
						</ImageBox>
					</ProfilePicArea>
					<UserInfoList>
						<NickNameArea>
							<span>{nickname}</span> / <span>{gender}</span>
							<Badge>{ntrp}</Badge>
						</NickNameArea>
						<UserInfoItem>
							<ItemName>지역: </ItemName>
							<ItemContent>
								{address} ({zipCode})
							</ItemContent>
						</UserInfoItem>
						<UserInfoItem>
							<ItemName>연령: </ItemName>
							<ItemContent>{ageGroup}</ItemContent>
						</UserInfoItem>
						<UserInfoItem>
							<ItemName>매너: </ItemName>
							<ItemContent>{mannerScore} 점</ItemContent>
						</UserInfoItem>
					</UserInfoList>
				</UserInfoContainer>
			</ModalBox>
		</>
	);
}

const UserInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ProfilePicArea = styled.div`
	max-width: ${(props) => (props.theme.isResponsive ? pxToRem('220px') : rem('220px'))};
	max-height: ${(props) => (props.theme.isResponsive ? pxToRem('220px') : rem('220px'))};
	border-radius: 20px;
	overflow: hidden;
`;

const UserInfoList = styled.ul`
	display: flex;
	flex-direction: column;
	padding: ${(props) => (props.theme.isResponsive ? `${pxToRem('7px')} 0` : `${rem('7px')} 0`)};
`;

const UserInfoItem = styled.li`
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('15px') : rem('15px'))};
	font-family: ${FontFamilySemiBold};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
	color: ${BlackColor};
`;

const ItemName = styled.span`
	min-width: fit-content;
	font-family: inherit;
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeMd) : rem(FontSizeMd))};
	color: ${PrimaryColor};
`;
const ItemContent = styled.span`
	min-width: fit-content;
	font-family: inherit;
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeMd) : rem(FontSizeMd))};
	color: ${BlackColor};
`;

const NickNameArea = styled(UserInfoItem)`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Badge = styled.div`
	display: inline-block;
	width: fit-content;
	height: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('5px')}` : `0 ${rem('5px')}`)};
	margin-left: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	background-color: ${PrimaryColor};
	border-radius: 10px;

	text-align: center;
	color: ${WhiteColor};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeMc) : rem(FontSizeMc))};
	line-height: ${(props) => (props.theme.isResponsive ? pxToRem('18px') : rem('18px'))};
	font-family: ${FontFamilySemiBold};
`;
