// 매칭글 게시
import { array } from 'yup';

// export interface reqRegMatchingApiData {
// 	title: string; // 제목
// 	ageGroup: string; // 연령대
// 	matchingType: string; // 경기 유형
// 	ntrp: string; // NTRP (e.g. developement)

// 	location: string; // 장소 (문자열)
// 	lat: string; // 위도
// 	len: string; // 경도

// 	matchingDate: string; // 경기 날짜
// 	matchingStartTime: string; // 경기 시작 시간
// 	matchingEndTime: string; // 경기 종료 시간
// 	recruitDueDate: string; // 모집 종료 일(yyyy-mm-dd)
// 	recruitDueTime: string; // 모집 종료 시간(hh)
// 	recruitNum: number; // 모집 인원

// 	cost: number; // 대여비
// 	isReserved: boolean; // 예약 여부

// 	locationImg: string; // 구장 이미지
// 	content: string; // 본문
// }

// 매칭글 수정(알림, 패널티 부여)
export interface reqModifyMatchingApiData {
	ntrp: string;
	location: string; // 위경도 검색되지 않는 위치일 경우 에러 발생
	date: string;
	startTime: string;
	endTime: string;
	recruitDueDate: string;
	recruitDueTime: string;
	recruitNum: number;
	cost: number;
	isReserved: boolean;
	locationImg: string;
	content: string;
}

// 매칭 리스트 조회
export interface reqGetMatchingListApiData {
	params: {
		page: number;
		size: number;
		sort: string;
	};
	body: {
		filters: {
			date: string;
			regions: object;
			matchingTypes: object;
			ageGroups: object;
			ntrps: object;
		};
	};
}

// 반경 3km 매칭 리스트 조회
export interface reqGetMapMatchingListApiData {
	lat: number;
	lon: number;
}

// 매칭별 신청 현황 조회
export interface reqMatchingApplyStateApiData {
	matching_id: string;
}

// 주소 검색
export interface reqSearchAddressApiData {
	keyword: string; // 사용자가 검색할 때 입력하는 키워드
}
