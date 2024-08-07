import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';

import useRouterHook from '../../utils/useRouterHook';
import { RoundButton } from '../../styles/ts/components/buttons';
import DrawerBox from '../common/drawer';
import useCookies from '../../utils/useCookies';
import { pxToRem } from '../../utils/formatter';
import AuthService from '../../service/auth/service';
import { getCookies } from 'undici-types';
import { InputErrorColor } from '../../styles/ts/common';
import useToast from '../../utils/useToast';

interface MenuDrawerProps {
	readonly isOpen: boolean;
	readonly toggleDrawer: (prev: boolean) => void;
}

export default function MenuDrawer(props: MenuDrawerProps) {
	const { checkLogin, removeCookie } = useCookies();
	const { setMessage } = useToast();
	const { isOpen, toggleDrawer } = props;
	const { reload } = useRouterHook();
	const { getCookie } = useCookies();

	const logout = async () => {
		try {
			await AuthService.logout({ accessToken: getCookie('accessToken') });
			removeCookie('accessToken');
			toggleDrawer(isOpen);
			reload();
			setMessage('success', '로그아웃 되었습니다');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<DrawerBox
			placement='right'
			width='100%'
			height='100vh'
			isOpen={isOpen}
			toggleDrawer={() => toggleDrawer(isOpen)}>
			<MenuContainer>
				{checkLogin() ? (
					<>
						<MenuArea>
							<Link href='/main'>
								<RoundButton
									onClick={() => {
										// movePage('/main');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-green'}
									aria-label='메인 페이지로 이동'>
									소셜 매치
								</RoundButton>
							</Link>
							<Link href='/my'>
								<RoundButton
									onClick={() => {
										// movePage('/my');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-green'}
									aria-label='마이 페이지로 이동'>
									마이페이지
								</RoundButton>
							</Link>
							<Link href='/alarm'>
								<RoundButton
									onClick={() => {
										// movePage('/alarm');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-green'}
									aria-label='알림 페이지로 이동'>
									알림 페이지
								</RoundButton>
							</Link>
						</MenuArea>
						<SignArea>
							<RoundButton colorstyle={'is-black'} aria-label='로그아웃' onClick={logout}>
								로그아웃
							</RoundButton>
						</SignArea>
					</>
				) : (
					<>
						<MenuArea>
							<Link href='/main'>
								<RoundButton
									onClick={() => {
										// movePage('/main');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-green'}
									aria-label='소셜 매치'>
									소셜 매치
								</RoundButton>
							</Link>
						</MenuArea>
						<SignArea>
							<Link href='/login'>
								<RoundButton
									onClick={() => {
										// movePage('/login');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-black'}
									aria-label='로그인 페이지로 이동'>
									로그인
								</RoundButton>
							</Link>
							<Link href='/register'>
								<RoundButton
									onClick={() => {
										// movePage('/register');
										toggleDrawer(isOpen);
									}}
									colorstyle={'is-black'}
									aria-label='회원가입 페이지로 이동'>
									회원가입
								</RoundButton>
							</Link>
						</SignArea>
					</>
				)}
			</MenuContainer>
		</DrawerBox>
	);
}

const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	min-height: 100%;
`;

const MenuArea = styled.div`
	width: 100%;

	button {
		text-align: right;
		margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
		padding: ${(props) =>
			props.theme.isResponsive
				? `${pxToRem('20px')} ${pxToRem('30px')}`
				: `${rem('20px')} ${rem('30px')}`};
	}
`;

const SignArea = styled(MenuArea)`
	button {
		text-align: center;
	}
`;

const AlertBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NewAlertIcon = styled.div`
	width: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	height: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	border-radius: 50%;
	background-color: ${InputErrorColor};
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
`;
