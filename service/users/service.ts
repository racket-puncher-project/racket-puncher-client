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

const usersService = {
	getUserInfo,
	getUserHostedData,
	getUserAppliedData,
};

export default usersService;
