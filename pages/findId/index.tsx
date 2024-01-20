import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../styles/ts/components/input';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { onlyNumber, pxToRem } from '../../utils/formatter';
import { InputErrorText } from '../../styles/ts/components/text';
import { rem } from 'polished';
import AuthService from '../../service/auth/service';
import useToast from '../../utils/useToast';
import { useRouter } from 'next/router';

const schema = yup.object().shape({
	phoneNumber: yup
		.string()
		.required('휴대폰 번호는 필수입니다.')
		.matches(
			/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
			'휴대폰 번호 형식을 확인해주세요'
		),
	certifyNumber: yup.string().required('인증번호는 필수입니다.'),
});

export default function FindId() {
	const { setMessage } = useToast();
	const router = useRouter();

	const [certifyNumVisible, setCertifyNumVisible] = useState(false);

	const [timer, setTimer] = useState(180);
	const [intervalId, setIntervalId] = useState<number | null>(null);

	// CheckComplete
	const [checkPhoneCertifyComplete, setCheckPhoneCertifyComplete] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		getValues,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm({
		resolver: yupResolver(schema),
	});

	// 다음버튼 클릭
	const clickNextBtn = () => {
		setCertifyNumVisible(false);
		findId();
	};

	// 인증번호 타이머
	const setCertifyTimer = () => {
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
			const phoneNumberSchema = yup.reach(schema, 'phoneNumber') as yup.StringSchema;
			await phoneNumberSchema.validate(getValues('phoneNumber'));
			clearErrors('phoneNumber');
			try {
				const res = await AuthService.phoneSendCode({ phoneNumber: getValues('phoneNumber') });
				setMessage('success', res.data.response.message);
				setCertifyNumVisible(true);
				setTimer(300);
				setCertifyTimer();
			} catch (e) {
				if (e.response.data.code === 500) {
					setMessage('error', e.response.data.message);
				}
			}
		} catch (e) {
			setError('phoneNumber', {
				type: 'manual',
				message: e.message,
			});
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

	// 아이디 찾기
	const findId = async () => {
		try {
			const res = await AuthService.findId({ phoneNumber: getValues('phoneNumber') });
			console.log(res);
			if (res.data.response.authType === 'GENERAL') {
				router.push(`/findId/result?email=${encodeURIComponent(res.data.response.email)}`);
			} else {
				setMessage('error', '카카오로 로그인하세요');
				router.push('/login');
			}
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 400) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	return (
		<>
			<FindIdViewContainer>
				<PageMainTitle>아이디 찾기</PageMainTitle>

				<InputContainer>
					<InputButtonBox>
						<InputBox>
							<label htmlFor='findIdPhoneNum'>휴대폰 번호</label>
							<input
								id='findIdPhoneNum'
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
								<label htmlFor='findIdCertifyNum'>인증 번호</label>
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
						disabled={!checkPhoneCertifyComplete}>
						다음
					</RoundButton>
				</ButtonBox>
			</FindIdViewContainer>
		</>
	);
}

const FindIdViewContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
`;

const InputContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
`;

const InputButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */

	.input__InputBox-sc-7b0p27-0 {
		flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('380px') : rem('380px'))};
	}

	.buttons__SquareButton-sc-1doc049-1 {
		flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('180px') : rem('180px'))};
		margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('26px') : rem('26px'))};
		margin-left: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	}
`;

const ButtonBox = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
`;
