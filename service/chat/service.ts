import http from '../../lib/http/httpInterceptor';

// 지난 채팅 내역 불러오기
const getPreviousMessageData = (data: any) => {
	return http.get(`/api/chat/previous/${data.matchingId}`);
};

const ChatService = {
	getPreviousMessageData,
};

export default ChatService;
