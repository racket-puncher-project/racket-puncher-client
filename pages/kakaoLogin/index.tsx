import { useEffect } from 'react';
import AuthService from '../../service/auth/service';
import useCookies from '../../utils/useCookies';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { kakaoLoginState } from '../../lib/store/kakaoLogin/index';

export default function KakaoLoginPage() {
	const { setCookie } = useCookies();
	const router = useRouter();

	const [snsLoginState, setSnsLoginState] = useRecoilState(kakaoLoginState);

	const kakaoLogin = async (queryCode) => {
		try {
			const res = await AuthService.kakaoLogin({ code: queryCode });
			console.log(res);

			// 기존에 등록된 카카오 유저
			if (res.data.response.registered) {
				setCookie('accessToken', res.data.response.accessToken, { expires: 1 / 24 });
				router.replace('/main');
			} else {
				// 카카오 로그인 후 최초 접속
				setSnsLoginState({
					email: res.data.response.email,
					profileImageUrl: res.data.response.profileImageUrl,
					nickname: res.data.response.nickname,
				});
				console.log('snsLoginState', snsLoginState);
				router.replace('/snsRegister');
				console.log('snsLoginState', snsLoginState);
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
			<div></div>
		</>
	);
}
