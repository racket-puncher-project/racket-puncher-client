import http from '../../lib/http/httpInterceptor';
import { reqModifyMyPageApiData, reqPostReviewApiData } from './interface';

// 마이페이지 조회
const getUserInfo = () => {
	return http.get('/api/users/my-page');
};

// 내가 등록한 매칭 조회
const getUserHostedData = () => {
	return http.get('/api/users/my-page/hosted');
};

// 내가 신청한 매칭 조회
const getUserAppliedData = () => {
	return http.get('/api/users/my-page/applied');
};

// 회원 정보 수정
const modifyMyPageData = (data: reqModifyMyPageApiData) => {
	return http.patch('/api/users/my-page/modify', data);
};

// 알림 조회
const getNotificationData = () => {
	return http.get('/api/users/notifications');
};

// 회원 정보 열람
const getUserProfileData = (userId) => {
	return http.get(`/api/users/profile/${userId}`);
};

// 리뷰 페이지 조회
const getReviewData = (matchingId) => {
	return http.get(`/api/users/review/${matchingId}`);
};

// 리뷰하기
const postReviewData = (matchingId, data: reqPostReviewApiData) => {
	return http.post(`/api/users/review/${matchingId}`, data);
};

const usersService = {
	getUserInfo,
	getUserHostedData,
	getUserAppliedData,
	modifyMyPageData,
	getNotificationData,
	getUserProfileData,
	getReviewData,
	postReviewData,
};

export default usersService;
