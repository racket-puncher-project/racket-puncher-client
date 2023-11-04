import styled from 'styled-components';
import React, { useState } from 'react';
import { Radio, Select } from 'antd';
import type { SelectProps } from 'antd';
import { rem } from 'polished';
import { useForm, Controller } from 'react-hook-form';

import {
	FontSizeMc,
	FontSizeSpSm,
	PrimaryColor,
	ReportColor,
	LightBlackColor,
	WhiteColor,
	BlackColor,
} from '../../../../styles/ts/common';
import { RoundButton } from '../../../../styles/ts/components/buttons';
import CustomDatePicker from '../../../common/datePicker';
import ModalBox from '../../../common/modal';
import { RegionBasic, RegionGyeonggi, RegionSeoul } from '../../../../constants/region';
import { array } from 'yup';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
	options.push({
		value: i.toString(36) + i,
		label: i.toString(36) + i,
	});
}

export default function FilteringModal() {
	const [dateState, setDateState] = useState(new Date());
	const [regionModalVisible, setRegionModalVisible] = useState(false);
	const [realRegionParentValue, setRealRegionParentValue] = useState([]);
	const [realRegionChildValue, setRealRegionChildValue] = useState([]);

	const concatArr = RegionSeoul.concat(RegionGyeonggi);

	const {
		control: filterControl,
		register: filterRegister,
		handleSubmit: filterHandleSubmit,
		setValue: filterSetValue,
		watch: filterWatch,
	} = useForm();

	const {
		control: regionControl,
		register: regionRegister,
		handleSubmit: regionHandleSubmit,
		setValue: regionSetValue,
		watch: regionWatch,
		reset: regionReset,
	} = useForm();

	const handleChange = (value: string | string[]) => {
		console.log(`Selected: ${value}`);
	};

	const toggleModal = () => {
		setRegionModalVisible((prev) => !prev);
	};

	const setChildOption = () => {
		if (
			regionWatch('parent').find((element) => element === 'SEOUL') &&
			regionWatch('parent').length === 1
		) {
			return RegionSeoul;
		}
		if (
			regionWatch('parent').find((element) => element === 'GYEONGGI') &&
			regionWatch('parent').length === 1
		) {
			return RegionGyeonggi;
		}
		if (regionWatch('parent').length === 2) {
			return concatArr;
		}
	};

	const clickRegionApplyBtn = () => {
		setRegionModalVisible(false);
		setRealRegionParentValue(regionWatch('parent'));
		setRealRegionChildValue(regionWatch('child'));
		filterSetValue('grandParent', regionWatch('child'));
	};

	// 모달에서 적용하기 버튼을 클릭하지 않고 x 버튼을 클릭했을때
	const closeRegionModal = () => {
		setRegionModalVisible(false);
		regionSetValue('parent', realRegionParentValue);
		regionSetValue('child', realRegionChildValue);
	};

	// 부모요소 컨트롤 메서드
	const handleRegionParentElemet = (value: any) => {
		regionSetValue('parent', value);

		// 서울, 경기 둘다 없을때
		if (regionWatch('parent').length === 0) {
			regionSetValue('child', []);
		}
		// 서울만 있을 때
		if (regionWatch('parent').length === 1 && regionWatch('parent').includes('SEOUL')) {
			const processArr = RegionGyeonggi.map((element1) => element1.value);
			const newArr = regionWatch('child').filter((element1) => !processArr.includes(element1));
			regionSetValue('child', newArr);
		}
		// 경기만 있을 때
		if (regionWatch('parent').length === 1 && regionWatch('parent').includes('GYEONGI')) {
			const processArr = RegionSeoul.map((element1) => element1.value);
			const newArr = regionWatch('child').filter((element1) => !processArr.includes(element1));
			regionSetValue('child', newArr);
		}
	};

	const clickApplyBtn = () => {
		console.log('적용하기');
	};

	return (
		<>
			<FilteringModalContainer>
				<div className={'content-box'}>
					{/* radio */}
					<Radio.Group defaultValue='register' size='large'>
						<Radio.Button value='register'>등록순</Radio.Button>
						<Radio.Button value='distance'>거리순</Radio.Button>
						<Radio.Button value='deadLine'>모집임박순</Radio.Button>
					</Radio.Group>

					<FilteringOptionContainer>
						{/* date-picker */}
						<OptionWrap>
							<LabelBox>
								<SelectTitle>날짜</SelectTitle>
							</LabelBox>
							<CustomDatePicker dateState={dateState} setDateState={setDateState} />
						</OptionWrap>

						{/* region */}
						<OptionWrap>
							<RegionBtnBox>
								<SelectTitle>지역</SelectTitle>
								<SelectRegionBtn onClick={() => setRegionModalVisible(true)}>
									지역 선택
								</SelectRegionBtn>
							</RegionBtnBox>

							<Controller
								name={'grandParent'}
								control={filterControl}
								defaultValue={[]}
								render={({ field }) => (
									<Select
										{...field}
										mode='multiple'
										options={concatArr}
										style={{ width: '100%' }}
									/>
								)}
							/>
						</OptionWrap>

						{/* matching type */}
						<OptionWrap>
							<LabelBox>
								<SelectTitle>경기 유형</SelectTitle>
							</LabelBox>

							<Select
								mode='multiple'
								placeholder='경기 유형을 선택해주세요.'
								onChange={handleChange}
								style={{ width: '100%' }}
								options={options}
							/>
						</OptionWrap>

						{/* age */}
						<OptionWrap>
							<LabelBox>
								<SelectTitle>모집 연령대</SelectTitle>
							</LabelBox>

							<Select
								mode='multiple'
								placeholder='연령대를 선택해주세요.'
								onChange={handleChange}
								style={{ width: '100%' }}
								options={options}
							/>
						</OptionWrap>

						{/* NTRP */}
						<OptionWrap>
							<LabelBox>
								<SelectTitle>모집 수준</SelectTitle>
							</LabelBox>

							<Select
								mode='multiple'
								placeholder='모집 수준을 선택해주세요.'
								onChange={handleChange}
								style={{ width: '100%' }}
								options={options}
							/>
						</OptionWrap>
					</FilteringOptionContainer>
				</div>

				<div className={'btn-box'}>
					<RoundButton>적용하기</RoundButton>
				</div>
			</FilteringModalContainer>

			{/* modal */}
			<ModalBox
				isOpen={regionModalVisible}
				toggleModal={toggleModal}
				onOk={clickApplyBtn}
				onCancel={closeRegionModal}>
				{/* 지역 (시/도) */}
				<OptionWrap>
					<LabelBox>
						<SelectTitle>지역 (시/도)</SelectTitle>
					</LabelBox>

					<Controller
						name={'parent'}
						control={regionControl}
						defaultValue={[]}
						render={({ field }) => (
							<Select
								{...field}
								mode='multiple'
								placeholder='시/도를 선택해주세요.'
								style={{ width: '100%' }}
								options={RegionBasic}
								onChange={(value) => {
									handleRegionParentElemet(value);
								}}
							/>
						)}
					/>
				</OptionWrap>

				{/* 지역 (구/동) */}
				<OptionWrap>
					<LabelBox>
						<SelectTitle>지역 (구/동)</SelectTitle>
					</LabelBox>

					<Controller
						name={'child'}
						control={regionControl}
						defaultValue={[]}
						render={({ field }) => (
							<Select
								{...field}
								mode='multiple'
								placeholder='구/동을 선택해주세요.'
								style={{ width: '100%' }}
								options={setChildOption()}
								disabled={regionWatch('parent').length <= 0}
								onChange={(value) => {
									regionSetValue('child', value);
								}}
							/>
						)}
					/>
				</OptionWrap>

				<RoundButton colorstyle={'is-green'} onClick={clickRegionApplyBtn}>
					적용하기
				</RoundButton>
			</ModalBox>
		</>
	);
}

const FilteringModalContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 20px;

	div.ant-radio-group {
		width: 100% !important;
		display: flex !important;

		label {
			display: block;
			width: 100%;
			text-align: center;
			padding-inline: initial;
			font-size: ${rem(FontSizeSpSm)};
			font-family: Pretendard-Regular;
			line-height: 1;
			height: inherit;
			padding: 10px ${rem('10px')};
			color: ${ReportColor};
			-webkit-tap-highlight-color: transparent !important;

			&.ant-radio-button-wrapper-checked {
				border-color: ${PrimaryColor};
				color: ${PrimaryColor};

				&::before {
					background-color: ${PrimaryColor};
				}
			}
		}
	}
`;

const FilteringOptionContainer = styled.div`
	margin: 20px 0;
`;

const DatePickerBox = styled.div``;

const OptionWrap = styled.div`
	margin-bottom: 20px;

	div.datePicker__CustomDatePickerBox-sc-1gktdcy-0 {
		height: 50px;
		padding: 0 %{rem('14px')};
	}
	div.ant-select-selector {
		padding: 10px 14px;
		border-radius: 10px;
		border: 1px solid #dcdcdc !important;
		background-color: #f9f9f9 !important;

		span.ant-select-selection-item {
			border-radius: 10px;
			background: #84a840;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;

			span.ant-select-selection-item-content {
				color: #fff;
				font-size: 13px;
				font-family: Pretendard-Regular;
				margin-right: 5px;
			}

			span.ant-select-selection-item-remove {
				font-size: 13px;
				color: #fff;
			}
		}
	}
`;

const SelectTitle = styled.p`
	color: ${BlackColor};
	font-family: Pretendard-Regular;
	font-size: ${FontSizeSpSm};
`;

const LabelBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;
const RegionBtnBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

const SelectRegionBtn = styled.button`
	font-size: ${rem(FontSizeMc)};
	font-family: Pretendard-Regular;
	border: 1px solid ${LightBlackColor};
	background-color: ${WhiteColor};
	padding: 8px ${rem('15px')};
	border-radius: 10px;
	color: ${LightBlackColor};
	margin-left: ${rem('10px')};
	cursor: pointer;
`;