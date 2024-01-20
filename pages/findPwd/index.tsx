import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputBox } from '../../styles/ts/components/input';
import { InputErrorText } from '../../styles/ts/components/text';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { onlyNumber, pxToRem } from '../../utils/formatter';
import useRouterHook from '../../utils/useRouterHook';
import { rem } from 'polished';
import { useRouter } from 'next/router';
import AuthService from '../../service/auth/service';
import useToast from '../../utils/useToast';
import { useSetRecoilState } from 'recoil';
import { pwdResetTokenState } from '../../lib/store/reset';

const schema = yup.object().shape({
	email: yup
		.string()
		.required('이메일은 필수입니다.')
		.matches(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			'이메일 형식이 올바르지 않습니다.'
		),
	phoneNumber: yup
		.string()
		.required('휴대폰 번호는 필수입니다.')
		.matches(
			/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
			'휴대폰 번호 형식을 확인해주세요'
		),
	certifyNumber: yup.string().required('인증번호는 필수입니다.'),
});

export default function FindPwd() {
	const { movePage } = useRouterHook();
	const { setMessage } = useToast();
	const router = useRouter();

	const setResetTokenState = useSetRecoilState(pwdResetTokenState);

	const [email, setEmail] = useState('');

	const [certifyNumVisible, setCertifyNumVisible] = useState(false);

	// timer
	const [intervalId, setIntervalId] = useState<number | null>(null);
	const [timer, setTimer] = useState(5);

	// CheckComplete
	const [checkPhoneCertifyComplete, setCheckPhoneCertifyComplete] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// 인증번호 ---------------------------------------------------------------
	// 인증번호 타이머
	const setCertTimer = () => {
		if (intervalId) {
			clearInterval(intervalId);
		}
		const newIntervalId = setInterval(() => {
			setTimer((prevTimer) => {
				if (prevTimer === 1) {
					clearInterval(newIntervalId);
					setCertifyNumVisible(false);
					return 0;
				} else {
					return prevTimer - 1;
				}
			});
		}, 1000);
		setIntervalId(Number(newIntervalId));
	};

	// 휴대폰 번호 인증번호 받기
	const getVerification = async () => {
		try {
			const res = await AuthService.phoneSendCode({ phoneNumber: getValues('phoneNumber') });
			setMessage('success', res.data.response.message);
			setCertifyNumVisible(true);
			setTimer(300);
			setCertTimer();
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 500) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	// 인증번호 확인
	const confirmCertifyBtn = async () => {
		const params = {
			phoneNumber: getValues('phoneNumber'),
			authCode: getValues('certifyNumber'),
		};

		try {
			const res = await AuthService.phoneVerifyCode(params);
			setMessage('success', res.data.response.message);
			setCheckPhoneCertifyComplete(true);
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 400) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	// 비밀번호 초기화 요청 ---------------------------------------------------------------
	const postPwdVerifyApiData = async () => {
		const params = {
			email: getValues('email'),
			phoneNumber: getValues('phoneNumber'),
		};

		try {
			const res = await AuthService.postPwdVerify(params);
			console.log(res);
			setResetTokenState(res.data.response.resetToken);

			movePage('/findPwd/result');
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 400) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	const clickNextBtn = () => {
		postPwdVerifyApiData();
	};

	useEffect(() => {
		if (router.query.email && typeof router.query.email === 'string') {
			setEmail(router.query.email);
			setValue('email', router.query.email);
		}
	}, [router.query, setValue]);

	return (
		<>
			<FindPwdViewContainer>
				<PageMainTitle>비밀번호 찾기</PageMainTitle>

				<InputContainer>
					<InputBox>
						<label htmlFor='findPwdEmail'>이메일</label>

						<input
							id='findPwdEmail'
							{...register('email')}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{errors.email?.message && <InputErrorText>{errors.email.message}</InputErrorText>}
					</InputBox>

					<InputButtonBox>
						<InputBox>
							<label htmlFor='findPwdPhoneNum'>휴대폰 번호</label>
							<input
								id='findPwdPhoneNum'
								type={'text'}
								maxLength={11}
								{...register('phoneNumber')}
								onChange={(e) => {
									setValue('phoneNumber', onlyNumber(e.target.value));
								}}
							/>
							{errors.phoneNumber?.message && (
								<InputErrorText>{errors.phoneNumber.message}</InputErrorText>
							)}
						</InputBox>
						<SquareButton
							height={'50px'}
							onClick={getVerification}
							disabled={!watch('phoneNumber')}>
							인증번호 전송
						</SquareButton>
					</InputButtonBox>

					{certifyNumVisible && (
						<InputButtonBox>
							<InputBox certify='true'>
								<label htmlFor='findPwdCertifyNum'>인증 번호</label>
								<input
									id='findIdCertifyNum'
									type={'text'}
									maxLength={6}
									{...register('certifyNumber')}
									onChange={(e) => {
										setValue('certifyNumber', onlyNumber(e.target.value));
									}}
								/>
								<span className={'limit-time'}>
									{String(Math.floor(timer / 60)).padStart(2, '0')}:
									{String(timer % 60).padStart(2, '0')}
								</span>
								{errors.certifyNumber?.message && (
									<InputErrorText>{errors.certifyNumber.message}</InputErrorText>
								)}
							</InputBox>
							<SquareButton
								height={'50px'}
								disabled={!watch('certifyNumber')}
								onClick={confirmCertifyBtn}>
								확인
							</SquareButton>
						</InputButtonBox>
					)}
				</InputContainer>

				<ButtonBox>
					<RoundButton
						colorstyle={'is-green'}
						onClick={handleSubmit(clickNextBtn)}
						disabled={
							!watch('email') ||
							!watch('phoneNumber') ||
							!watch('certifyNumber') ||
							!checkPhoneCertifyComplete
						}>
						다음
					</RoundButton>
				</ButtonBox>
			</FindPwdViewContainer>
		</>
	);
}

const FindPwdViewContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
`;

const InputContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
`;

const InputButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	.input__InputBox-sc-7b0p27-0 {
		flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('380px') : rem('380px'))};
	}

	.buttons__SquareButton-sc-1doc049-1 {
		flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('180px') : rem('180px'))};
		margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
		margin-left: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	}
`;

const ButtonBox = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
`;
