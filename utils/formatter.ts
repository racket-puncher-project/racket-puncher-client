import moment from 'moment';

// 날짜 포맷터
export const dateFormatter = (date: Date) => {
	return moment(date).format('YYYY-MM-DD');
};

// 채팅 날짜 포맷터
export const chatTimeFormatter = (dateString: string) => {
	return moment(dateString, 'YYYY-MM-DD HH:mm:ss.SSS').format('hh:mm a');
};

// 시간 포맷터₩
export const timeFormatter = (time: Date, type?: string) => {
	const hour = time.getHours() > 9 ? time.getHours() + '' : '0' + time.getHours() + '';
	const minute = time.getMinutes() > 9 ? time.getMinutes() + '' : '0' + time.getMinutes() + '';
	return type === 'HOUR' ? hour : hour + ':' + minute;
};

// 날짜 역 포매터 (DPicker)
export const stringToDateFormatter = (dateString: string) => {
	return dateString.split('-').map((ele, i) => (i < 2 ? parseInt(ele) - 1 : parseInt(ele)));
};
// 시간 역 포매터 (TPicker)
export const stringToTimeFormatter = (timeString: string) => {
	return timeString.split(':').map((ele) => parseInt(ele));
};

// 휴대폰번호 포맷터
export const onlyNumber = (value: string) => {
	return value.replace(/[^0-9]/g, '');
};

// 매칭 목록 날짜 포맷터
export const formatDateTime = (inputDateStr) => {
	const inputFormat = 'YYYY-MM-DD HH:mm';
	const date = moment(inputDateStr, inputFormat);

	// 요일을 한글로 변환
	const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
	const dayOfWeek = daysOfWeek[date.day()];

	// 오전/오후 표시
	const amPm = date.format('A') === 'AM' ? '오전' : '오후';

	// 시간을 한글로 변환
	const hour = date.format('hh'); // 12 시간 형식
	const minute = date.format('mm');

	// 날짜, 요일, 오전/오후, 시간 형식으로 포맷
	if (minute === '00') {
		return date.format('YYYY년 MM월 DD일 ') + dayOfWeek + ' ' + amPm + ' ' + hour + '시 ';
	} else {
		return (
			date.format('YYYY년 MM월 DD일 ') + dayOfWeek + ' ' + amPm + ' ' + hour + '시 ' + minute + '분'
		);
	}
};

// px / rem 컨버터
export const pxToRem = (pxValue) => {
	const numericValue = parseFloat(pxValue);

	// 브라우저 넓이가 640px 이하일때, 5vw의 640px 변환 값 = 32px
	return numericValue / 32 + 'rem';
};
