import { atom } from 'recoil';

export const myProfileInfoState = atom({
	key: 'myProfileInfoState',
	default: {
		id: 0,
		siteUserName: '',
		nickname: '',
		email: '',
		phoneNumber: '',
		mannerScore: 0,
		gender: '',
		ntrp: '',
		address: '',
		zipCode: '',
		ageGroup: '',
		profileImg: '',
		authType: '',
	},
});
