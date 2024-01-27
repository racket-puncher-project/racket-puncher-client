import http from '../../lib/http/httpInterceptor';

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

// 알림 조회
const getNotificationData = () => {
	return http.get('/api/users/notifications');
};

const usersService = {
	getUserInfo,
	getUserHostedData,
	getUserAppliedData,
	getNotificationData,
};

export default usersService;
