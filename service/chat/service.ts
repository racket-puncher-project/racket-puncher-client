import http from '../../lib/http/httpInterceptor';

// 지난 채팅 내역 불러오기
const getPreviousMessageData = (data: any) => {
	return http.get(`/api/chat/previous/${data.matchingId}`);
};

// 채팅방 목록 불러오기
const getChatList = () => {
	return http.get('/api/chat/list');
};

const ChatService = {
	getPreviousMessageData,
	getChatList,
};

export default ChatService;
