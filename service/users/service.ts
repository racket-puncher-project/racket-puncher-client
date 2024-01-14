import http from '../../lib/http/httpInterceptor';

// 마이페이지 조회
const getUserInfo = () => {
	return http.get('/api/users/my-page');
};

const usersService = {
	getUserInfo,
};

export default usersService;
