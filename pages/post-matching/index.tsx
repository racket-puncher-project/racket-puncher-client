import React, { ChangeEvent, useRef, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { rem } from 'polished';

import MatchesService from '../../service/matches/service';
import {
	FontFamilyRegular,
	FontSizeSm,
	InputBorderColor,
	InputBoxColor,
	ReportColor,
} from '../../styles/ts/common';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { InputBox } from '../../styles/ts/components/input';
import { RoundButton } from '../../styles/ts/components/buttons';
import { CustomSelect } from '../../styles/ts/components/select';
import { ImageBox } from '../../styles/ts/components/box';
import { TextArea } from '../../styles/ts/components/textarea';
import DPicker from '../../components/contents/postMatching/datePicker/DPicker';
import TPicker from '../../components/contents/postMatching/timePicker/TPicker';
import ButtonStyleRadio from '../../components/common/buttonRadio';
import SearchCourtDrawer from '../../components/contents/postMatching/searchCourtDrawer';
import useToast from '../../utils/useToast';
import { pxToRem } from '../../utils/formatter';

const schema = yup.object().shape({
	postTitle: yup.string().required('제목을 입력해주세요.'),
	matchType: yup.string().required('경기 유형을 선택해주세요.'),
	numOfRecruited: yup.number().required('모집 인원수를 선택해주세요.'),
	selectedAge: yup.string().required('모집 연령대를 선택해주세요.'),
	selectedNTRP: yup.string().required('모집할 NTRP를 선택해주세요.'),
	matchDate: yup.string().required('경기 날짜를 선택해주세요.'),
	matchStartTime: yup.string().required('경기 시작 시간을 선택해주세요.'),
	matchEndTime: yup.string().required('경기 종료 시간을 선택해주세요.'),
	deadlineDate: yup.string().required('모집 마감일을 선택해주세요.'),
	deadlineTime: yup.string().required('모집 마감 시간을 선택해주세요.'),
	courtAddress: yup.string().required('경기장 주소를 입력해주세요.'),
	isCourtBooked: yup.boolean().required('경기장 예약 여부를 선택해주세요.'),
	courtFee: yup
		.number()
		.required('경기장 대여료를 입력해주세요. (무료일 경우 0을 입력해주세요.)')
		.min(0),
	locationImg: yup.string(),
	mainText: yup.string().required('본문 내용을 입력해주세요.'),
});
export default function PostMatching() {
	// To-do
	// 프론트에서 모집 마감일 받을 때 등록일 이후~경기시작 시간 이전으로 모집 마감일 선택하도록 설정
	// 이미지 api 붙이기

	const {
		register: postMatchingResister,
		handleSubmit: postMatchingHandleSubmit,
		setValue: postMatchingSetValue,
		getValues: postMatchingGetValues,
		watch: postMatchingWatch,
		formState: { errors: postMatchingErrors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const { setMessage } = useToast();
	const [matchDate, setMatchDate] = useState(null);
	const [matchStartTime, setMatchStartTime] = useState('');
	const [matchEndTime, setMatchEndTime] = useState('');
	const [deadlineDate, setDeadlineDate] = useState('');
	const [deadlineTime, setDeadlineTime] = useState('');
	const [courtInfos, setCourtInfos] = useState({ address: '', lat: '', lon: '' });
	const [numOfAllPlayers, setNumOfAllPlayers] = useState(1);
	const [selectedImage, setSelectedImage] = useState(null);
	const [optionsForNOR, setOptionsForNOR] = useState([
		{ value: null, label: '경기 유형을 먼저 선택해주세요.' },
	]);
	const selectHandler = (option: string) => {
		option.includes('SINGLE')
			? setOptionsForNOR([{ value: 1, label: '1 명' }])
			: setOptionsForNOR([
				{ value: 1, label: '1 명' },
				{ value: 2, label: '2 명' },
				{ value: 3, label: '3 명' },
			]);
	};

	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const clickImgFile = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files && files.length > 0) {
			const selectedFile = files[0];

			const fileReader = new FileReader();
			fileReader.readAsDataURL(selectedFile);
			fileReader.onloadend = () => {
				setSelectedImage(fileReader.result);
			};
			console.log(fileReader);
			postMatchingSetValue('locationImg', `${fileReader.result}`);
		}
	};

	const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
	const toggleSearchDrawer = () => setIsSearchDrawerOpen((prev: boolean) => !prev);

	const checkValidation = () => {
		if (
			!postMatchingWatch('postTitle') ||
			!postMatchingWatch('matchType') ||
			!postMatchingWatch('numOfRecruited') ||
			!postMatchingWatch('selectedAge') ||
			!postMatchingWatch('selectedNTRP') ||
			!postMatchingWatch('matchDate') ||
			!postMatchingWatch('matchStartTime') ||
			!postMatchingWatch('matchEndTime') ||
			!postMatchingWatch('deadlineDate') ||
			!postMatchingWatch('deadlineTime') ||
			!postMatchingWatch('courtAddress') ||
			!postMatchingWatch('isCourtBooked') ||
			!postMatchingWatch('courtFee') ||
			// !postMatchingWatch('courtPhoto') ||
			!postMatchingWatch('mainText')
		) {
			return true;
		} else {
			return false;
		}
	};

	const onSubmit = (e: any) => {
		e.preventDefault();
		const postedData = {
			title: postMatchingGetValues('postTitle'),
			matchingType: postMatchingGetValues('matchType'),
			recruitNum: postMatchingGetValues('numOfRecruited'),
			ageGroup: postMatchingGetValues('selectedAge'),
			ntrp: postMatchingGetValues('selectedNTRP'),
			matchingDate: postMatchingGetValues('matchDate'),
			matchingStartTime: postMatchingGetValues('matchStartTime'),
			matchingEndTime: postMatchingGetValues('matchEndTime'),
			recruitDueDate: postMatchingGetValues('deadlineDate'),
			recruitDueTime: postMatchingGetValues('deadlineTime'),
			location: postMatchingGetValues('courtAddress'),
			lat: `${courtInfos.lat}`,
			len: `${courtInfos.lon}`,
			isReserved: postMatchingGetValues('isCourtBooked'),
			cost: postMatchingGetValues('courtFee'),
			locationImg: postMatchingGetValues('locationImg'),
			content: postMatchingGetValues('mainText'),
		};
		console.log(e);
		console.log(postedData);
		MatchesService.regMatchingData(postedData)
			.then(() => console.log('포스트됨'))
			.catch((e) => console.log(e));
	};

	return (
		<>
			<SearchCourtDrawer
				isOpen={isSearchDrawerOpen}
				toggleDrawer={toggleSearchDrawer}
				setCourtInfos={setCourtInfos}
				setAddress={postMatchingSetValue}
			/>
			<PageTitleArea>
				<PageMainTitle>매칭 글 등록</PageMainTitle>
			</PageTitleArea>
			<PostMatchingForm onSubmit={onSubmit}>
				<InputBox>
					<label htmlFor='postTitle'>제목</label>
					<input
						id='postTitle'
						type='text'
						{...postMatchingResister('postTitle')}
						onChange={(e) => postMatchingSetValue('postTitle', e.target.value)}
					/>
				</InputBox>
				<HalfContainer>
					<InputBox>
						<label htmlFor='matchType'>경기 유형</label>
						<CustomSelect
							id='matchType'
							options={[
								{ value: 'SINGLE', label: '단식' },
								{ value: 'MIXED_SINGLE', label: '혼성 단식' },
								{ value: 'DOUBLE', label: '복식' },
								{ value: 'MIXED_DOUBLE', label: '혼성 복식' },
							]}
							{...postMatchingResister('matchType')}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								const selected = e + '';
								postMatchingSetValue('matchType', selected);
								setNumOfAllPlayers(selected.includes('SINGLE') ? 2 : 4);
								selectHandler(selected);
							}}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='numOfRecruited'>모집 인원</label>
						<CustomSelect
							id='numOfRecruited'
							options={optionsForNOR}
							{...postMatchingResister('numOfRecruited')}
							onChange={(e: number) => postMatchingSetValue('numOfRecruited', e)}
						/>
					</InputBox>
				</HalfContainer>
				<HalfContainer>
					<InputBox>
						<label htmlFor='selectedAge'>모집 연령대</label>
						<CustomSelect
							id='selectedAge'
							options={[
								{ value: 'TEENAGER', label: '10대' },
								{ value: 'TWENTIES', label: '20대' },
								{ value: 'THIRTIES', label: '30대' },
								{ value: 'FORTIES', label: '40대' },
								{ value: 'FIFTIES', label: '50대' },
								{ value: 'SIXTIES', label: '60대' },
							]}
							onChange={(e: string) => postMatchingSetValue('selectedAge', e)}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='selectedNTRP'>모집 NTRP</label>
						<CustomSelect
							id='selectedNTRP'
							options={[
								{ value: 'DEVELOPMENT', label: 'NewBie (1.0 ~ 2.0)' },
								{ value: 'BEGINNER', label: 'Beginner (2.5 ~ 3.5)' },
								{ value: 'INTERMEDIATE', label: 'Intermediate (4.0 ~ 4.5)' },
								{ value: 'ADVANCED', label: 'Advanced (5.0 ~ 5.5)' },
								{ value: 'PRO', label: 'Pro (6.0 ~ 7.0)' },
							]}
							{...postMatchingResister('selectedNTRP')}
							onChange={(e: string) => {
								postMatchingSetValue('selectedNTRP', e);
							}}
						/>
					</InputBox>
				</HalfContainer>

				<InputBox>
					<label htmlFor='matchDate'>경기일</label>
					<DPicker name='matchDate' setState={postMatchingSetValue} />
					<HiddenInput
						type='text'
						id='matchDate'
						value={`${matchDate}`}
						{...postMatchingResister('matchDate')}
						readOnly
					/>
				</InputBox>

				<HalfContainer>
					<InputBox>
						<label htmlFor='matchStartTime'>시작 시간</label>
						<TPicker name='matchStartTime' setState={postMatchingSetValue} type={[true, true]} />
						<HiddenInput
							type='text'
							id='matchStartTime'
							value={`${matchStartTime}`}
							{...postMatchingResister('matchStartTime')}
							readOnly
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='matchEndTime'>종료 시간</label>
						<TPicker name='matchEndTime' setState={postMatchingSetValue} type={[true, true]} />
						<HiddenInput
							type='text'
							id='matchEndTime'
							value={`${matchEndTime}`}
							{...postMatchingResister('matchEndTime')}
							readOnly
						/>
					</InputBox>
				</HalfContainer>

				<InputBox>
					<label htmlFor='deadlineDnT'>모집 마감 기한</label>
					<HalfContainer>
						<DPicker
							name='deadlineDate'
							setState={postMatchingSetValue}
							matchDate={`${deadlineDate}`}
							type={[true, true, true]}
						/>
						<HiddenInput
							type='text'
							id='deadlineDate'
							value={`${deadlineDate}`}
							{...postMatchingResister('deadlineDate')}
							readOnly
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								postMatchingSetValue('deadlineDate', e.target.value);
								console.log(postMatchingGetValues('deadlineDate'));
							}}
						/>
						<TPicker name='deadlineTime' setState={postMatchingSetValue} type={[true, false]} />
						<HiddenInput
							type='text'
							id='deadlineTime'
							value={`${deadlineTime}`}
							{...postMatchingResister('deadlineTime')}
							readOnly
						/>
					</HalfContainer>
				</InputBox>

				<InputBox>
					<label htmlFor='courtAddress'>경기장 주소</label>
					<input
						type='text'
						id='courtAddress'
						defaultValue={''}
						value={`${courtInfos.address}`}
						{...postMatchingResister('courtAddress')}
						onClick={(e) => {
							e.preventDefault();
							setIsSearchDrawerOpen(true);
						}}
						readOnly
					/>
				</InputBox>

				<HalfContainer>
					<InputBox>
						<label htmlFor='isCourtBooked'>경기장 예약 여부</label>
						<ButtonStyleRadio
							idString='isCourtBooked'
							setState={postMatchingSetValue}
							{...postMatchingResister('isCourtBooked')}
						/>
					</InputBox>
				</HalfContainer>
				<CourtFeeArea>
					<FeeForEachSpan>
						1인당{' '}
						{Number.isInteger(postMatchingGetValues('courtFee') / numOfAllPlayers)
							? `${postMatchingGetValues('courtFee') / numOfAllPlayers}`
							: '-'}{' '}
						원
					</FeeForEachSpan>
					<InputBox>
						<label htmlFor='courtFee'>구장 대여비</label>
						<input
							type='number'
							id='courtFee'
							className='text-align-right'
							pattern='^[0-9]+$'
							{...postMatchingResister('courtFee')}
							onChange={(e) => postMatchingSetValue('courtFee', Number(e.target.value))}
							onClick={() => {
								if (numOfAllPlayers === 0) setMessage('warning', '경기 유형을 먼저 선택해주세요!');
							}}
							// 포커스 옮기기
							// matchTypeREF.current.focus();
						/>
					</InputBox>
				</CourtFeeArea>

				<InputBox>
					<label htmlFor='courtPhoto'>경기장 이미지</label>
					<ImageSection onClick={clickImgFile}>
						<ImageBox width={'620px'} height={'380px'}>
							<img
								src={selectedImage || '/images/add-image-rectangle-00.png'}
								alt='경기장 이미지'
							/>
						</ImageBox>
						<input
							id='courtPhoto'
							type='file'
							style={{ display: 'none' }}
							ref={fileInputRef}
							onChange={handleFileChange}
							accept={'image/*'}
						/>
					</ImageSection>
				</InputBox>

				<InputBox>
					<label htmlFor='mainText'>본문 내용</label>
					<MainTextArea
						id={'mainText'}
						onChange={(e) => postMatchingSetValue('mainText', e.target.value)}
						placeholder='내용을 입력하세요.'
						{...postMatchingResister('mainText')}
					/>
				</InputBox>

				<SubmitBtn colorstyle={'is-black'} type='submit' disabled={checkValidation()}>
					등록하기
				</SubmitBtn>
			</PostMatchingForm>
		</>
	);
}

const PageTitleArea = styled.div`
	margin: ${rem('50px')} auto;
`;

const PostMatchingForm = styled.form`
	display: flex;
	flex-direction: column;

	.input__InputBox-sc-7b0p27-0 {
		.text-align-right {
			text-align: right;
		}

		.select__CustomSelect-sc-1q63q92-0 {
			margin-bottom: 0px;
		}
	}
`;

const HalfContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};

	.input__InputBox-sc-7b0p27-0 {
		width: 100%;

		.text-align-right {
			text-align: right;
		}

		.select__CustomSelect-sc-1q63q92-0 {
			margin-bottom: 0px;
		}
	}
`;
const CourtFeeArea = styled.div`
	position: relative;
	width: 100%;
`;

const FeeForEachSpan = styled.span`
	position: absolute;
	top: ${(props) => (props.theme.isResponsive ? pxToRem('3px') : rem('3px'))};
	right: ${(props) => (props.theme.isResponsive ? pxToRem('5px') : rem('5px'))};
	max-width: ${(props) => (props.theme.isResponsive ? pxToRem('150px') : rem('150px'))};
	white-space: nowrap;
	overflow: hidden;

	font-family: ${FontFamilyRegular};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSm) : rem(FontSizeSm))};
	color: ${ReportColor};
`;

const SubmitBtn = styled(RoundButton)`
	margin: ${(props) => (props.theme.isResponsive ? `${pxToRem('30px')} 0` : `${rem('30px')} 0`)};
`;

const ImageSection = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
	width: 100%;
	min-height: fit-content;
	max-width: ${(props) => (props.theme.isResponsive ? pxToRem('620px') : rem('620px'))};
	max-height: ${(props) => (props.theme.isResponsive ? pxToRem('400px') : rem('400px'))};
	border: none;
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};

	img {
		width: 100%;
		border-radius: 5px;
		border: 1px solid ${InputBorderColor};

		background: ${InputBoxColor};
		overflow: hidden;
	}
`;

const MainTextArea = styled(TextArea)`
	max-width: ${(props) => (props.theme.isResponsive ? pxToRem('620px') : rem('620px'))};
	height: ${(props) => (props.theme.isResponsive ? pxToRem('400px') : rem('400px'))};
`;

const HiddenInput = styled.input`
	position: absolute;
	width: 0px;
	height: 0px;
	max-width: 0px;
	max-height: 0px;
	background-color: transparent;
	padding: 0px;
	border: 1px solid transparent;
	border-radius: 0px;
	box-shadow: none;
	visibility: hidden;
`;
