import http from '../../lib/http/httpInterceptor';

// 실시간 알림 확인을 위한 SSE 연결
const regNotificationConnect = () => {
	return http.get('/api/notifications/connect');
};

const AlarmService = {
	regNotificationConnect,
};

export default AlarmService;
