import React, { useState } from 'react';
import DatePicker from 'react-mobile-datepicker';
import styled from 'styled-components';
import { ImageBox } from '../../../styles/ts/components/box';
import { FontSizeSpSm, LightGrayColor } from '../../../styles/ts/common';
import { rem } from 'polished';
import { pxToRem, timeFormatter } from '../../../utils/formatter';

interface ITimePickerProps {
	readonly dateState: string;
	readonly setDateState: any;
	readonly type?: any;
}

const options = {
	headerFormat: 'hh시 mm분',
	dateFormat: ['hh', 'mm'],
	locale: 'ko',
	confirmText: '확인',
	cancelText: '취소',
};

const timeConfig = {
	hour: {
		format: 'hh',
		caption: '시',
		step: 1,
	},
	minute: {
		format: 'mm',
		caption: '분',
		step: 1,
	},
};

export default function CustomTimePicker(props: ITimePickerProps) {
	const [timeState, setTimeState] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (selected: Date) => {
		setTimeState(selected);
		props.setDateState(timeFormatter(selected));
		setIsOpen(false);
	};

	return (
		<>
			<CustomDatePickerBox onClick={() => setIsOpen(true)}>
				{timeState.getHours() > 9 ? `${timeState.getHours()}` : '0' + `${timeState.getHours()}`}시{' '}
				{timeState.getMinutes() > 9
					? `${timeState.getMinutes()}`
					: '0' + `${timeState.getMinutes()}`}
				분
				<ImageBox width={'24px'} height={'24px'}>
					<img src='/svg/clock-icon.svg' alt='시계' color={LightGrayColor} />
				</ImageBox>
			</CustomDatePickerBox>
			<DatePicker
				isOpen={isOpen}
				dateConfig={timeConfig}
				onSelect={handleSelect}
				onCancel={() => {
					props.setDateState('');
					setIsOpen(false);
				}}
				{...options}
			/>
		</>
	);
}

const CustomDatePickerBox = styled.div`
	width: 100%;
	padding: ${(props) =>
		props.theme.isResponsive
			? `${pxToRem('17px')} ${pxToRem('14px')}`
			: `${rem('17px')} ${rem('14px')}`};
	border-radius: 10px;
	border: 1px solid #dcdcdc;
	background: #f9f9f9;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	p {
		font-size: ${rem(`${FontSizeSpSm}`)};
		font-family: Pretendard-Regular;
	}
`;
