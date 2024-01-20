import { atom } from 'recoil';

export const pwdResetTokenState = atom({
	key: 'pwdResetTokenState',
	default: {
		resetToken: '',
	},
});
