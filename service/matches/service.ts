import http from '../../lib/http/httpInterceptor';
import {
	reqGetMatchingListApiData,
	reqModifyMatchingApiData,
	reqGetMapMatchingListApiData,
} from './interface';

// 매칭글 게시
const regMatchingData = (data: any) => {
	return http.post('/api/matches', data);
};

// 매칭글 상세 보기
const getDetailMatchingList = (matchingId) => {
	return http.get(`/api/matches/detail/${matchingId}`);
};

// 매칭글 수정(알림, 패널티 부여)
const modifyMatchingList = (matchingId, data: reqModifyMatchingApiData) => {
	return http.patch(`/api/matches/${matchingId}`, data);
};

// 매칭글 삭제(알림, 패널티 부여)
const deleteMatchingList = (matchingId) => {
	return http.delete(`/api/matches/${matchingId}`);
};

// 매칭리스트 조회
const getMatchingList = (data: reqGetMatchingListApiData) => {
	return http.post('/api/matches/list', data.body, {
		params: data.params,
	});
};

// 반경 3km 매칭 리스트 조회
const getMapMatchingList = (data: reqGetMapMatchingListApiData) => {
	return http.post('/api/matches/list/map', data);
};

// 매칭별 신청 현황 조회
const getMatchingApplyState = (matchingId) => {
	return http.get(`/api/matches/${matchingId}/apply`);
};

// 주소 검색
const searchAddress = (data: any) => {
	return http.get('/api/matches/address', {
		params: {
			keyword: data.keyword,
		},
	});
};

const MatchesService = {
	regMatchingData,
	getDetailMatchingList,
	getMatchingList,
	modifyMatchingList,
	deleteMatchingList,
	getMatchingApplyState,
	searchAddress,
	getMapMatchingList,
};

export default MatchesService;
