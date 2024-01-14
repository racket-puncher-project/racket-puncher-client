import { atom } from 'recoil';

export const kakaoLoginState = atom({
	key: 'kakaoLoginState',
	default: {
		email: '',
		profileImageUrl: '',
		nickname: '',
	},
});
