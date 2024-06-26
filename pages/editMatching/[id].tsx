import React, { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { rem } from 'polished';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../styles/ts/components/input';
import { CustomSelect } from '../../styles/ts/components/select';
import { onlyNumber, pxToRem } from '../../utils/formatter';
import { RoundButton, SquareButton } from '../../styles/ts/components/buttons';
import CustomDatePicker from '../../components/common/datePicker';
import CustomTimePicker from '../../components/common/timePicker';
import ButtonStyleRadio from '../../components/common/buttonRadio';
import { BackgroundImageBox, GrayLine, ImageBox } from '../../styles/ts/components/box';
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
import { TextArea } from '../../styles/ts/components/textarea';
import MatchesService from '../../service/matches/service';
import DrawerBox from '../../components/common/drawer';
import { CustomBadge } from '../../styles/ts/components/badge';
import { v4 as uuidv4 } from 'uuid';
import AuthService from '../../service/auth/service';
import { useRouter } from 'next/router';
import useToast from '../../utils/useToast';
import moment from 'moment';

const schema = yup.object().shape({
	title: yup.string().required('제목을 입력해주세요.'),
	matchingType: yup.string().required('경기 유형을 선택해주세요.'),
	recruitNum: yup.number().required('모집 인원수를 선택해주세요.'),
	ageGroup: yup.string().required('모집 연령대를 선택해주세요.'),
	ntrp: yup.string().required('모집할 NTRP를 선택해주세요.'),
	location: yup.string().required('경기장 주소를 입력해주세요.'),
	isReserved: yup.boolean().required('경기장 예약 여부를 선택해주세요.'),
	cost: yup.string().required('경기장 대여료를 입력해주세요'),
	locationImg: yup.string(),
	content: yup.string().required('본문 내용을 입력해주세요.'),
});
export default function EditMatching() {
	// To-do
	// 프론트에서 모집 마감일 받을 때 등록일 이후~경기시작 시간 이전으로 모집 마감일 선택하도록 설정
	// 이미지 api 붙이기
	const router = useRouter();
	const { setMessage } = useToast();

	// 경기 일시 state
	const [dateState, setDateState] = useState('');

	// 시작 시간 state
	const [startTimeState, setStartTimeState] = useState('');

	// 종료 시간 state
	const [endTimeState, setEndTimeState] = useState('');

	// 모집마감일 state
	const [recruitDueDateState, setRecruitDueDateState] = useState('');

	// 모집마감시간 state
	const [recruitDueTimeState, setRecruitDueTimeState] = useState('');

	// 이미지
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [fileData, setFileData] = useState(null);
	const [virtualImgData, setVirtualImgData] = useState(null);

	// address
	const [addressDrawer, setAddressDrawer] = useState(false);
	const [addressList, setAddressList] = useState(null);

	const {
		control: postMatchControl,
		register: postMatchingResister,
		handleSubmit: postMatchingHandleSubmit,
		setValue: postMatchingSetValue,
		getValues: postMatchingGetValues,
		watch: postMatchingWatch,
		formState: { errors: postMatchingErrors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const {
		register: addressRegister,
		handleSubmit: addressHandleSubmit,
		setValue: addressSetValue,
		watch: addressWatch,
		formState: { errors: addressErrors },
	} = useForm();

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
		postMatchingSetValue('location', item.jibunAddr);
	};

	const checkValidation = () => {
		const validationArr = [
			postMatchingWatch('title'),
			postMatchingWatch('matchingType'),
			postMatchingWatch('recruitNum'),
			postMatchingWatch('ageGroup'),
			postMatchingWatch('ntrp'),
			dateState,
			startTimeState,
			endTimeState,
			recruitDueDateState,
			recruitDueTimeState,
			postMatchingWatch('isReserved'),
			postMatchingWatch('cost'),
			postMatchingWatch('location'),
			virtualImgData,
			postMatchingWatch('content'),
		];
		const checkValue = validationArr.every((item) => {
			return item !== null && item !== undefined && item !== '';
		});
		return checkValue;
	};

	const getMatchingInfo = async (id: any) => {
		try {
			const res: any = await MatchesService.getDetailMatchingList(id);
			postMatchingSetValue('title', res.data.response.title);
			postMatchingSetValue('matchingType', res.data.response.matchingType);
			postMatchingSetValue('recruitNum', res.data.response.recruitNum);
			postMatchingSetValue('ageGroup', res.data.response.ageGroup);
			postMatchingSetValue('ntrp', res.data.response.ntrp);
			setDateState(res.data.response.date);
			setStartTimeState(res.data.response.startTime);
			setEndTimeState(res.data.response.endTime);
			setRecruitDueDateState(moment(res.data.response.recruitDueDateTime).format('YYYY-MM-DD'));
			setRecruitDueTimeState(moment(res.data.response.recruitDueDateTime).format('HH:mm'));
			postMatchingSetValue('isReserved', res.data.response.isReserved);
			postMatchingSetValue('cost', res.data.response.cost);
			postMatchingSetValue('location', res.data.response.location);
			postMatchingSetValue('content', res.data.response.content);
			setVirtualImgData(res.data.response.locationImg);
		} catch (e) {
			console.log('e', e);
		}
	};

	const onSubmit = async () => {
		const params = {
			title: postMatchingGetValues('title'),
			ageGroup: postMatchingGetValues('ageGroup'),
			matchingType: postMatchingGetValues('matchingType'),
			ntrp: postMatchingGetValues('ntrp'),
			recruitNum: postMatchingGetValues('recruitNum'),
			date: dateState,
			startTime: startTimeState,
			endTime: endTimeState,
			recruitDueDate: recruitDueDateState,
			recruitDueTime: recruitDueTimeState.split(':')[0],
			isReserved: postMatchingGetValues('isReserved'),
			cost: Number(postMatchingGetValues('cost')),
			content: postMatchingGetValues('content'),
			location: postMatchingGetValues('location'),
		};
		try {
			let fileUrl = null;
			// 이미지 등록
			if (fileData) {
				const formData = new FormData();
				formData.append('imageFile', fileData);
				fileUrl = await AuthService.uploadImgSignup(formData);
			}
			const res = await MatchesService.modifyMatchingList(router.query.id, {
				...params,
				locationImg: fileUrl ? fileUrl.data.response : virtualImgData,
			});
			if (res.status === 200) {
				setMessage('success', '매칭 수정에 성공하셨습니다');
				router.push('/');
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		// router 객체가 준비가 되었을때
		if (router.isReady) {
			// 상세 정보 호출
			getMatchingInfo(router.query.id);
		}
	}, [router.query]);

	return (
		<>
			<PageTitleArea>
				<PageMainTitle>매칭 글 수정</PageMainTitle>
			</PageTitleArea>
			<PostMatchingFormBox>
				{/* 제목 */}
				<InputBox>
					<label htmlFor='postTitle'>제목</label>
					<input type='text' {...postMatchingResister('title')} />
				</InputBox>
				{/* 경기 유형 / 모집 인원 */}
				<HalfBox>
					<InputBox>
						<label>경기 유형</label>
						<Controller
							name='matchingType'
							control={postMatchControl}
							render={({ field }) => (
								<CustomSelect
									{...field}
									options={[
										{ value: 'SINGLE', label: '단식' },
										{ value: 'DOUBLE', label: '복식' },
										{ value: 'MIXED_DOUBLE', label: '혼성 복식' },
										{ value: 'OTHER', label: '기타' },
									]}
								/>
							)}
						/>
					</InputBox>
					<InputBox>
						<label>모집 인원</label>
						<Controller
							name='recruitNum'
							control={postMatchControl}
							render={({ field }) => (
								<CustomSelect
									{...field}
									options={[
										{ value: 2, label: '2명' },
										{ value: 3, label: '3명' },
									]}
								/>
							)}
						/>
					</InputBox>
				</HalfBox>
				{/* 모집 연령대 / 모집 NTRP */}
				<HalfBox>
					<InputBox>
						<label>모집 연령대</label>
						<Controller
							name='ageGroup'
							control={postMatchControl}
							render={({ field }) => (
								<CustomSelect
									{...field}
									options={[
										{ value: 'TWENTIES', label: '20대' },
										{ value: 'THIRTIES', label: '30대' },
										{ value: 'FORTIES', label: '40대' },
										{ value: 'SENIOR', label: '50대 이상' },
									]}
								/>
							)}
						/>
					</InputBox>
					<InputBox>
						<label>모집 NTRP</label>
						<Controller
							name='ntrp'
							control={postMatchControl}
							render={({ field }) => (
								<CustomSelect
									{...field}
									options={[
										{ value: 'DEVELOPMENT', label: 'NewBie (1.0 ~ 2.0)' },
										{ value: 'BEGINNER', label: 'Beginner (2.5 ~ 3.5)' },
										{ value: 'INTERMEDIATE', label: 'Intermediate (4.0 ~ 4.5)' },
										{ value: 'ADVANCE', label: 'Advanced (5.0 ~ 5.5)' },
										{ value: 'PRO', label: 'Pro (6.0 ~ 7.0)' },
									]}
								/>
							)}
						/>
					</InputBox>
				</HalfBox>
				{/* 경기일시 */}
				<InputBox>
					<label>경기일</label>
					<CustomDatePicker dateState={dateState} setDateState={setDateState} />
				</InputBox>
				{/* 시작 시간 / 종료 시간 */}
				<HalfBox>
					<InputBox>
						<label>시작 시간</label>
						<CustomTimePicker
							dateState={startTimeState}
							setDateState={setStartTimeState}
							isUpdate={true}
						/>
					</InputBox>
					<InputBox>
						<label>종료 시간</label>
						<CustomTimePicker
							dateState={endTimeState}
							setDateState={setEndTimeState}
							isUpdate={true}
						/>
					</InputBox>
				</HalfBox>
				{/* 모집마감일 */}
				<InputBox>
					<label>모집마감일</label>
					<CustomDatePicker dateState={recruitDueDateState} setDateState={setRecruitDueDateState} />
				</InputBox>
				{/* 모집마감시간 */}
				<InputBox>
					<label>모집마감시간</label>
					<CustomTimePicker
						type={'HOUR'}
						dateState={recruitDueTimeState}
						setDateState={setRecruitDueTimeState}
						isUpdate={true}
					/>
				</InputBox>
				{/* 경기장 예약여부 */}
				<InputBox>
					<label>경기장 예약 여부</label>
					<ButtonStyleRadio
						isUpdate={true}
						state={postMatchingGetValues('isReserved')}
						setState={postMatchingSetValue}
						{...postMatchingResister('isReserved')}
					/>
				</InputBox>
				{/* 비용 */}
				<InputBox>
					<label>구장대여비</label>
					<input
						type={'text'}
						{...postMatchingResister('cost')}
						onChange={(e) => {
							postMatchingSetValue('cost', onlyNumber(e.target.value));
						}}
					/>
				</InputBox>
				{/* 구장 주소 */}
				<InputButtonBox>
					<InputBox>
						<label>주소</label>
						<input placeholder={'주소'} {...postMatchingResister('location')} readOnly />
					</InputBox>
					<SquareButton height={'50px'} onClick={handleAddressDrawer}>
						주소 검색
					</SquareButton>
				</InputButtonBox>
				{/* 구장 이미지 */}
				<InputBox>
					<label>경기장 이미지</label>
					{virtualImgData ? (
						<>
							<div onClick={clickImgFile}>
								<BackgroundImageBox
									widthInit={true}
									height={'380px'}
									backgroundImage={virtualImgData}
								/>
							</div>
						</>
					) : (
						<>
							<ImageSection onClick={clickImgFile}>
								<ImageBox height={'380px'}>
									<img
										src={virtualImgData || '/images/add-image-rectangle-00.png'}
										alt='경기장 이미지'
									/>
								</ImageBox>
							</ImageSection>
						</>
					)}
					<input
						id='courtPhoto'
						type='file'
						style={{ display: 'none' }}
						ref={fileInputRef}
						onChange={handleFileChange}
						accept={'image/jpeg, image/png'}
					/>
				</InputBox>
				{/* 내용 */}
				<InputBox>
					<label>본문 내용</label>
					<MainTextArea
						onChange={(e) => postMatchingSetValue('content', e.target.value)}
						placeholder='내용을 입력하세요.'
						{...postMatchingResister('content')}
					/>
				</InputBox>
			</PostMatchingFormBox>
			<SubmitBtnWrapper>
				<RoundButton disabled={!checkValidation()} onClick={onSubmit}>
					수정하기
				</RoundButton>
			</SubmitBtnWrapper>
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

const PageTitleArea = styled.div`
	margin: ${rem('50px')} auto;
`;

const PostMatchingFormBox = styled.div``;

const HalfBox = styled.div`
	display: flex;
	justify-content: space-between;

	div.input__InputBox-sc-7b0p27-0 {
		flex-basis: ${(props) => (props.theme.isResponsive ? pxToRem('280px') : rem('280px'))};

		&:first-child {
			margin-right: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
		}
	}
`;

const ImageSection = styled.div`
	cursor: pointer;
	border: none;
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	border-radius: 5px;
	border: 1px solid ${InputBorderColor};
	background: ${InputBoxColor};
	overflow: hidden;
	div.box__ImageBox-sc-1o0dgyy-0 {
		width: auto !important;
	}
	img {
		width: 100%;
		display: block;
	}
`;

const MainTextArea = styled(TextArea)`
	max-width: ${(props) => (props.theme.isResponsive ? pxToRem('620px') : rem('620px'))};
	height: ${(props) => (props.theme.isResponsive ? pxToRem('400px') : rem('400px'))};
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

const SubmitBtnWrapper = styled.div`
	margin-bottom: 50px;
`;
