import http from '../../lib/http/httpInterceptor';
import { reqApplyMatchesApiData } from './interface';

// 참가 신청(알림)
const regMatchingData = (matchingId) => {
	return http.post(`/api/apply/matches/${matchingId}`);
};

// 참가 신청 취소(매칭 확정된 경기일 경우, 경기 매칭 확정 상태 변경 및 패널티 부여, 알림)
const getDetailMatchingList = (applyId) => {
	return http.delete(`/api/apply/${applyId}`);
};

// 참가 신청 수락(알림)
const applyMatches = (matchingId, data: reqApplyMatchesApiData) => {
	return http.patch(`/api/apply/matches/${matchingId}`, data);
};

const ApplyService = {
	regMatchingData,
	getDetailMatchingList,
	applyMatches,
};

export default ApplyService;
