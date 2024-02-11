import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { rem } from 'polished';
import { v4 as uuidv4 } from 'uuid';

import { InputBox } from '../../styles/ts/components/input';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import { CustomSelect } from '../../styles/ts/components/select';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { GrayLine, ImageBox } from '../../styles/ts/components/box';
import DrawerBox from '../../components/common/drawer';
import { onlyNumber, pxToRem } from '../../utils/formatter';
import { InputErrorText } from '../../styles/ts/components/text';
import {
	BlackColor,
	FontSizeMd,
	FontSizeMdLg,
	FontSizeSpSm,
	InputBorderColor,
	InputBoxColor,
	LightBlackColor,
	PrimaryColor,
} from '../../styles/ts/common';
import { CustomBadge } from '../../styles/ts/components/badge';
import { prefix } from '../../constants/prefix';
import MatchesService from '../../service/matches/service';
import AuthService from '../../service/auth/service';
import { ageOptions, genderOptions, NTRPOptions } from '../../constants/filterOption';
import useRouterHook from '../../utils/useRouterHook';
import useToast from '../../utils/useToast';
import usersService from '../../service/users/service';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { myProfileInfoState } from '../../lib/store/my';

const createValidationSchema = (authType) =>
	yup.object().shape({
		userName: yup.string().required('이름은 필수입니다.'),
		phoneNumber: yup
			.string()
			.required('휴대폰 번호는 필수입니다.')
			.matches(
				/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
				'휴대폰 번호 형식을 확인해주세요'
			),
		certifyNumber: yup.string().required('인증번호는 필수입니다.'),
		nickName: yup.string().required('닉네임은 필수입니다.'),
		address: yup.string().required('우편번호는 필수입니다.'),
		detailAddress: yup.string().required('상세주소는 필수입니다.'),
		gender: yup.string().required('성별을 선택해주세요.'),
		age: yup.string().required('연령대를 선택해주세요.'),
		NTRP: yup.string().required('NTRP를 선택해주세요.'),
		...(authType === 'GENERAL'
			? {
					password: yup
						.string()
						.required('비밀번호는 필수입니다.')
						.matches(
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
							'비밀번호는 8자 이상, 숫자/소문자/대문자/특수문자를 각 최소 하나씩 포함해야 합니다.'
						),
					rePassword: yup
						.string()
						.required('비밀번호확인은 필수입니다.')
						.oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
			  }
			: {}),
	});

export default function register() {
	const { movePage } = useRouterHook();
	const router = useRouter();
	const getMyProfileInfo = useRecoilValue(myProfileInfoState);
	const { setMessage } = useToast();

	const [certifyNumVisible, setCertifyNumVisible] = useState(false);

	// Recoil getMyProfileInfo
	const [existingUserName, setExistingUserName] = useState(getMyProfileInfo.siteUserName);
	const [existingEmail, setExistingEmail] = useState(getMyProfileInfo.email);
	const [existingNickname, setExistingNickname] = useState(getMyProfileInfo.nickname);
	const [existingAddress, setExistingAddress] = useState(getMyProfileInfo.address);
	const [existingZipcode, setExistingZipcode] = useState(getMyProfileInfo.zipCode);

	// file
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [fileData, setFileData] = useState(null);
	const [virtualImgData, setVirtualImgData] = useState(null);

	// timer
	const [timer, setTimer] = useState(180);
	const [intervalId, setIntervalId] = useState<number | null>(null);

	// address
	const [addressDrawer, setAddressDrawer] = useState(false);
	const [addressList, setAddressList] = useState(null);

	// CheckComplete
	const [checkNicknameComplete, setCheckNicknameComplete] = useState(false);
	const [checkPhoneCertifyComplete, setCheckPhoneCertifyComplete] = useState(false);

	const profileImgStyle = {
		backgroundImage: `url(${virtualImgData})`,
		border: `1px solid ${InputBorderColor}`,
		borderRadius: '50%',
		height: '100%',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	const {
		control: updateProfileControl,
		register: updateProfileRegister,
		handleSubmit: updateProfileHandleSubmit,
		getValues: updateProfileGetValue,
		setValue: updateProfileSetValue,
		watch: updateProfileWatch,
		formState: { errors: updateProfileErrors },
		setError,
		clearErrors,
	} = useForm({
		resolver: yupResolver(createValidationSchema(getMyProfileInfo.authType)),
		defaultValues: {
			gender: getMyProfileInfo.gender,
			age: getMyProfileInfo.ageGroup,
			NTRP: getMyProfileInfo.ntrp,
		},
	});

	const {
		register: addressRegister,
		handleSubmit: addressHandleSubmit,
		setValue: addressSetValue,
		watch: addressWatch,
		formState: { errors: addressErrors },
	} = useForm();

	const checkValidation = () => {
		let validationArr = [
			updateProfileWatch('userName'),
			updateProfileWatch('phoneNumber'),
			updateProfileWatch('certifyNumber'),
			updateProfileWatch('gender'),
			updateProfileWatch('age'),
			updateProfileWatch('NTRP'),
			updateProfileWatch('nickName'),
			updateProfileWatch('address'),
			updateProfileWatch('detailAddress'),
			checkPhoneCertifyComplete,
			checkNicknameComplete,
		];

		if (getMyProfileInfo.authType === 'GENERAL') {
			validationArr = validationArr.concat([
				updateProfileWatch('password'),
				updateProfileWatch('rePassword'),
			]);
		}

		const checkValue = validationArr.every((item) => {
			return item !== null && item !== undefined && item !== '';
		});
		return checkValue;
	};

	const clickImgFile = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files[0];
		const fileReader = new FileReader();

		fileReader.onload = (event) => {
			setVirtualImgData(event.target.result);
		};
		setFileData(files);
		fileReader.readAsDataURL(files);
	};

	// 닉네임 중복 체크 ---------------------------------------------------------------
	const checkNickname = async () => {
		const params = {
			nickname: updateProfileGetValue('nickName'),
		};
		try {
			const res = await AuthService.checkNickname(params);
			setMessage('success', res.data.response.message);
			setCheckNicknameComplete(true);
			console.log(res);
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 400) {
				setMessage('error', e.response.data.message);
			}
			setCheckNicknameComplete(false);
		}
	};

	// 인증번호 ---------------------------------------------------------------
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
			const schema = createValidationSchema(getMyProfileInfo.authType);
			const phoneNumberSchema = yup.reach(schema, 'phoneNumber') as yup.StringSchema;

			await phoneNumberSchema.validate(updateProfileGetValue('phoneNumber'));
			clearErrors('phoneNumber');

			try {
				const res = await AuthService.phoneSendCode({
					phoneNumber: updateProfileGetValue('phoneNumber'),
				});
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
	const confirmCertiyBtn = async () => {
		const params = {
			phoneNumber: updateProfileGetValue('phoneNumber'),
			authCode: updateProfileGetValue('certifyNumber'),
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

	// 주소 검색 모달 ---------------------------------------------------------------
	const handleAddressDrawer = () => {
		setAddressDrawer((prev) => !prev);
	};

	// 주소 검색
	const onClickSearchAddress = async (data: any) => {
		const payload = {
			keyword: data.address,
		};
		try {
			const res = await MatchesService.searchAddress(payload);
			setAddressList(res.data.response);
		} catch (e) {
			console.log(e);
		}
	};

	// 주소 아이템 클릭시
	const onClickAddressItem = (item: any) => {
		handleAddressDrawer();
		updateProfileSetValue('address', item.jibunAddr);
		updateProfileSetValue('detailAddress', item.zipNo);
		setExistingAddress(item.jibunAddr);
		setExistingZipcode(item.zipNo);
	};

	// 프로필 수정 ------------------------------------------------------------------
	const UpdateProfileComplete = async () => {
		const params = {
			nickname: updateProfileGetValue('nickName'),
			phoneNumber: updateProfileGetValue('phoneNumber'),
			gender: updateProfileGetValue('gender'),
			ntrp: updateProfileGetValue('NTRP'),
			address: updateProfileGetValue('detailAddress'),
			zipCode: updateProfileGetValue('address'),
			profileImg: getMyProfileInfo.profileImg,
			ageGroup: updateProfileGetValue('age'),

			...(getMyProfileInfo.authType === 'GENERAL' && {
				password: updateProfileGetValue('password'),
				checkPassword: updateProfileGetValue('rePassword'),
			}),
		};

		try {
			// 이미지 등록
			const formData = new FormData();
			formData.append('imageFile', fileData);
			const fileUrl = await AuthService.uploadImgSignup(formData);

			const updateInfoRes = await usersService.modifyMyPageData({
				...params,
				profileImg: fileUrl.data.response,
			});

			console.log('updateInfoRes', updateInfoRes);

			movePage('/my');
		} catch (e) {
			console.log(e);
			if (e.response.data.code === 400 || e.response.data.code === 404) {
				setMessage('error', e.response.data.message);
			}
		}
	};

	return (
		<>
			<RegisterViewContainer>
				<PageMainTitle>프로필 수정</PageMainTitle>

				<ImageSection onClick={clickImgFile}>
					<ImageBox width={'200px'} height={'200px'}>
						{virtualImgData ? (
							<div className='img-align-box' style={profileImgStyle} />
						) : (
							<>
								<img src={getMyProfileInfo.profileImg} alt='profile-image' />
							</>
						)}
					</ImageBox>
					<input
						type='file'
						style={{ display: 'none' }}
						ref={fileInputRef}
						onChange={handleFileChange}
						accept={'image/jpeg, image/png'}
					/>
				</ImageSection>

				<InputContainer>
					<InputBox>
						<label htmlFor='registerUserName'>이름</label>
						<input
							id='registerUserName'
							type={'text'}
							{...updateProfileRegister('userName')}
							value={existingUserName}
							onChange={(e) => {
								setExistingUserName(e.target.value);
							}}
						/>
					</InputBox>

					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerPhoneNum'>휴대폰 번호</label>
							<input
								id='registerPhoneNum'
								type={'text'}
								disabled={certifyNumVisible}
								maxLength={11}
								{...updateProfileRegister('phoneNumber')}
							/>
							{updateProfileErrors.phoneNumber?.message && (
								<InputErrorText>{updateProfileErrors.phoneNumber.message}</InputErrorText>
							)}
						</InputBox>
						<SquareButton
							height={'50px'}
							onClick={() => {
								getVerification();
							}}
							disabled={!updateProfileWatch('phoneNumber')}>
							인증번호 전송
						</SquareButton>
					</InputButtonBox>
					{certifyNumVisible && (
						<>
							<InputButtonBox>
								<InputBox certify='true'>
									<label htmlFor='registerCertifyNum'>인증 번호</label>
									<input
										id='registerCertifyNum'
										type={'text'}
										maxLength={6}
										{...updateProfileRegister('certifyNumber')}
										onChange={(e) => {
											updateProfileSetValue('certifyNumber', onlyNumber(e.target.value));
										}}
									/>
									<span className={'limit-time'}>
										{String(Math.floor(timer / 60)).padStart(2, '0')}:
										{String(timer % 60).padStart(2, '0')}
									</span>
									{updateProfileErrors.certifyNumber?.message && (
										<InputErrorText>{updateProfileErrors.certifyNumber.message}</InputErrorText>
									)}
								</InputBox>
								<SquareButton
									onClick={confirmCertiyBtn}
									height={'50px'}
									disabled={!updateProfileWatch('certifyNumber')}>
									확인
								</SquareButton>
							</InputButtonBox>
						</>
					)}

					<SelectBox>
						<InputBox>
							<label htmlFor='registerGender'>성별</label>
							<Controller
								name='gender'
								control={updateProfileControl}
								render={({ field }) => <CustomSelect {...field} options={genderOptions} />}
							/>
						</InputBox>
						<InputBox>
							<label htmlFor='registerAge'>연령대</label>
							<Controller
								name='age'
								control={updateProfileControl}
								render={({ field }) => <CustomSelect {...field} options={ageOptions} />}
							/>
						</InputBox>
					</SelectBox>
					<InputBox>
						<label htmlFor='registerNTRP'>NTRP</label>
						<Controller
							name='NTRP'
							control={updateProfileControl}
							render={({ field }) => <CustomSelect {...field} options={NTRPOptions} />}
						/>
					</InputBox>

					{getMyProfileInfo.authType === 'GENERAL' && (
						<>
							<InputBox>
								<label htmlFor='registerPassword'>비밀번호</label>
								<input
									id='registerPassword'
									type={'password'}
									{...updateProfileRegister('password')}
								/>
								{updateProfileErrors.password?.message && (
									<InputErrorText>{updateProfileErrors.password.message}</InputErrorText>
								)}
							</InputBox>
							<InputBox>
								<label htmlFor='registerRePwd'>비밀번호 확인</label>
								<input
									id='registerRePwd'
									type={'password'}
									{...updateProfileRegister('rePassword')}
								/>
								{updateProfileErrors.rePassword?.message && (
									<InputErrorText>{updateProfileErrors.rePassword.message}</InputErrorText>
								)}
							</InputBox>
						</>
					)}

					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerNickNm'>닉네임</label>
							<input
								id='registerNickNm'
								type={'text'}
								{...updateProfileRegister('nickName')}
								value={existingNickname}
								onChange={(e) => {
									setExistingNickname(e.target.value);
								}}
							/>
						</InputBox>
						<SquareButton
							height={'50px'}
							disabled={!updateProfileWatch('nickName')}
							onClick={checkNickname}>
							중복체크
						</SquareButton>
					</InputButtonBox>
					<InputButtonBox>
						<InputBox>
							<label htmlFor='registerAddress'>주소</label>
							<input
								id='registerAddress'
								placeholder={'우편번호'}
								{...updateProfileRegister('address')}
								value={existingAddress}
								readOnly
							/>
						</InputBox>
						<SquareButton height={'50px'} onClick={handleAddressDrawer}>
							주소 검색
						</SquareButton>
					</InputButtonBox>
					<InputBox>
						<input
							id='registerDetailAddress'
							type={'text'}
							placeholder={'상세주소'}
							value={existingZipcode}
							{...updateProfileRegister('detailAddress')}
						/>
					</InputBox>
				</InputContainer>

				<ButtonBox>
					<RoundButton
						disabled={!checkValidation()}
						colorstyle={'is-green'}
						onClick={updateProfileHandleSubmit(UpdateProfileComplete)}>
						수정
					</RoundButton>
				</ButtonBox>
			</RegisterViewContainer>

			{/* 주소검색 모달 */}
			<DrawerBox
				title={'주소 검색'}
				isOpen={addressDrawer}
				placement={'bottom'}
				height={'100%'}
				toggleDrawer={handleAddressDrawer}>
				<>
					<InputNoTitleButtonBox>
						<InputBox>
							<input
								id='registerAddress'
								placeholder={'우편번호'}
								{...addressRegister('address')}
							/>
						</InputBox>
						<SquareButton height={'50px'} onClick={addressHandleSubmit(onClickSearchAddress)}>
							주소 검색
						</SquareButton>
					</InputNoTitleButtonBox>

					<DescTextBox>
						<p>
							찾으시려는 도로명주소, 동(읍/면/리) 또는 건물명을 입력해주세요.
							<br />
							(예 : 판교동, 판교원로 68, 판교실리콘파크)
						</p>
					</DescTextBox>

					<GrayLine />

					<AddressContainer>
						{addressList?.map((item) => {
							return (
								<AddressBoxWrap
									key={uuidv4()}
									onClick={() => {
										onClickAddressItem(item);
									}}>
									<AddLeftWrap>
										<AddressBox>
											<CustomBadge color={PrimaryColor}>도로명</CustomBadge>
											<p>{item.roadAddr}</p>
										</AddressBox>
										<AddressBox>
											<CustomBadge>지번</CustomBadge>
											<p>{item.jibunAddr}</p>
										</AddressBox>
									</AddLeftWrap>
									<AddRightWrap>{item.zipNo}</AddRightWrap>
								</AddressBoxWrap>
							);
						})}
					</AddressContainer>
				</>
			</DrawerBox>
		</>
	);
}

const RegisterViewContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
`;

const ImageSection = styled.div`
	display: flex;
	justify-content: center;
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	cursor: pointer;
`;

const InputContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
`;

const SelectBox = styled.div`
	display: flex;
	justify-content: space-between;

	div.input__InputBox-sc-7b0p27-0 {
		flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('280px') : rem('280px'))};

		&:first-child {
			margin-right: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
		}
	}
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

const DescTextBox = styled.div`
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};

	p {
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpSm) : rem(FontSizeSpSm))};
		color: ${LightBlackColor};
		font-family: Pretendard-Regular;
		line-height: ${rem(FontSizeMdLg)};
	}
`;

const AddressContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
`;

const AddressBoxWrap = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${InputBoxColor};
	border: 1px solid ${InputBorderColor};
	border-radius: 5px;
	padding: ${(props) => (props.theme.isResponsive ? pxToRem('15px') : rem('15px'))};
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	cursor: pointer;
	-webkit-tap-highlight-color: transparent !important;

	&:hover {
		background-color: #efefef;
	}
`;

const AddLeftWrap = styled.div`
	margin-right: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
`;

const AddressBox = styled.div`
	display: flex;
	align-items: center;

	&:first-child {
		margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
	}

	p {
		margin-left: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpSm) : rem(FontSizeSpSm))};
		font-family: Pretendard-Regular;
		line-height: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeMd) : rem(FontSizeMd))};
	}
`;

const AddRightWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeMd) : rem(FontSizeMd))};
	font-family: Pretendard-Regular;
	color: ${BlackColor};
`;

const InputNoTitleButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};

	.input__InputBox-sc-7b0p27-0 {
		flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('380px') : rem('380px'))};
		margin-bottom: 0 !important;
	}

	.buttons__SquareButton-sc-1doc049-1 {
		flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('180px') : rem('180px'))};
		margin-left: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	}
`;
