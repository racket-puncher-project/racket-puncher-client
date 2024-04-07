import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import LayoutContainer from '../components/layouts';
import '../styles/css/reset.css';
import '../styles/scss/font-family.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import AuthService from '../service/auth/service';
import useCookies from '../utils/useCookies';
import useRouterHook from '../utils/useRouterHook';

function MyApp({ Component, pageProps }: any) {
	const router = useRouter();

	const { getCookie, setCookie, removeCookie } = useCookies();
	const { movePage } = useRouterHook();

	const [isResponsive, setIsResponsive] = useState(false);

	const theme = { isResponsive };

	// viewportWidth check
	const checkViewPortWidth = () => {
		if (window.innerWidth <= 640) {
			document.documentElement.style.fontSize = '5vw';
			setIsResponsive(true);
		} else {
			document.documentElement.style.fontSize = '';
			setIsResponsive(false);
		}
	};

	// 토큰 재발행
	const getRefreshToken = async () => {
		const payload = {
			accessToken: getCookie('accessToken'),
		};
		try {
			const res = await AuthService.refreshToken(payload);
			console.log(res.data.response);
			setCookie('accessToken', res.data.response.accessToken);
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 401) {
				removeCookie('accessToken');
				movePage('/login');
			}
		}
	};

	// resize check
	useEffect(() => {
		window.addEventListener('resize', checkViewPortWidth);
	}, []);

	// error debug
	useEffect(() => {
		const originalError = console.error;
		// ...args : 함수에 전달되는 모든 인자들
		console.error = (...args) => {
			if (
				typeof args[0] === 'string' &&
				args[0].includes('ReactDOM.unstable_renderSubtreeIntoContainer()')
			) {
				return;
			}
			// 기본 동작 실행
			originalError(...args);
		};
	}, []);

	// router replace
	useEffect(() => {
		const token = getCookie('accessToken');

		if (router.pathname === '/' || router.pathname === '/_error') {
			router.replace('/main');
		}

		if (token) {
			getRefreshToken();
		}
	}, [router]);

	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<LayoutContainer>
					<Component {...pageProps} />
				</LayoutContainer>
			</ThemeProvider>
		</RecoilRoot>
	);
}

export default MyApp;
