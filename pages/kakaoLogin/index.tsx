import { useEffect } from 'react';
import AuthService from '../../service/auth/service';
import useCookies from '../../utils/useCookies';
import { useRouter } from 'next/router';
import useRouterHook from '../../utils/useRouterHook';

export default function KakaoLoginPage() {
	const { setCookie } = useCookies();
	const router = useRouter();

	const kakaoLogin = async (queryCode) => {
		try {
			const res = await AuthService.kakaoLogin({ code: queryCode });
			console.log(res);

			// 기존에 등록된 카카오 유저
			if (res.data.response.registerd) {
				setCookie('accessToken', res.data.response.accessToken, { expires: 7 });
				router.replace('/main');
			} else {
				// 카카오 로그인 후 최초 접속
				router.replace('/register');
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const queryStr = new URLSearchParams(location.search);
		const queryCode = queryStr.get('code');
		console.log('queryCode', queryCode);
		if (queryCode !== null) {
			kakaoLogin(queryCode);
		}
	}, []);
	return (
		<>
			<div>여긴 카카오로그인시 리다이렉트로 올 수 있는곳입니다.</div>
		</>
	);
}
