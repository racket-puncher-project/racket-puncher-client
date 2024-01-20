import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputBox } from '../../../styles/ts/components/input';
import { InputErrorText } from '../../../styles/ts/components/text';
import { RoundButton } from '../../../styles/ts/components/buttons';
import { pxToRem } from '../../../utils/formatter';

import { rem } from 'polished';
import { useRecoilValue } from 'recoil';
import { pwdResetTokenState } from '../../../lib/store/reset';
import AuthService from '../../../service/auth/service';
import useToast from '../../../utils/useToast';
import { useRouter } from 'next/router';

const schema = yup.object().shape({
	password: yup
		.string()
		.required('비밀번호는 필수입니다.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
		),
	rePassword: yup
		.string()
		.required('비밀번호는 필수입니다.')
		.oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
			'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
		),
});

export default function FindPwdResult() {
	const router = useRouter();
	const { setMessage } = useToast();
	const resetTokenState = useRecoilValue(pwdResetTokenState);

	const {
		register,
		handleSubmit,
		watch,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const changePwdBtn = () => {
		resetPwd();
	};

	// 비밀번호 초기화
	const resetPwd = async () => {
		const params = {
			resetToken: resetTokenState,
			newPassword: getValues('password'),
		};

		try {
			const res = await AuthService.resetPwd(params);
			console.log(res);
			setMessage('success', res.data.response.message);
			router.push('/login');
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 401) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	useEffect(() => {
		console.log('resetTokenState', resetTokenState.resetToken);
	}, []);

	return (
		<>
			<FindPwdResultContainer>
				<InputContainer>
					<InputBox>
						<label htmlFor='changePwd'>신규 비밀번호</label>
						<input id='changePwd' type={'password'} {...register('password')} />
						{errors.password?.message && <InputErrorText>{errors.password.message}</InputErrorText>}
					</InputBox>
					<InputBox>
						<label htmlFor='changeRePwd'>신규 비밀번호 확인</label>
						<input id='changeRePwd' type={'password'} {...register('rePassword')} />
						{errors.rePassword?.message && (
							<InputErrorText>{errors.rePassword.message}</InputErrorText>
						)}
					</InputBox>
				</InputContainer>

				<ButtonBox>
					<RoundButton
						colorstyle={'is-green'}
						onClick={handleSubmit(changePwdBtn)}
						disabled={!watch('password') || !watch('rePassword')}>
						비밀번호 변경
					</RoundButton>
				</ButtonBox>
			</FindPwdResultContainer>
		</>
	);
}

const FindPwdResultContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
`;

const InputContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
`;

const ButtonBox = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
`;
