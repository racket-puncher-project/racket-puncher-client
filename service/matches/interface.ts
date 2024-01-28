// 매칭글 게시
export interface reqRegMatchingApiData {
	title: string;
	ageGroup: string;
	matchingType: string;
	ntrp: string;
	location: string;
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
