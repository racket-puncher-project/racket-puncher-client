import http from '../../lib/http/httpInterceptor';
import httpFile from '../../lib/http/httpFileInterceptor';
import {
	reqCheckEmailApiData,
	reqCheckNicknameApiData,
	reqFindIdApiData,
	reqKakaoLoginApiData,
	reqKakaoSignupApiData,
	reqLoginApiData,
	reqLogoutApiData,
	reqPhoneSendCodeData,
	reqPhoneVerifyCodeData,
	reqPostPwdVerifyApiData,
	reqResetPwdApiData,
	reqSignupApiData,
} from './interface';

// 회원가입
const signup = (data: reqSignupApiData) => {
	return http.post('/api/auth/sign-up', data);
};

// 로그인
const login = (data: reqLoginApiData) => {
	return http.post('/api/auth/sign-in', data);
};

// 회원가입 프로필 이미지
const uploadImgSignup = (data: any) => {
	console.log(data);
	return httpFile.post('/api/aws/upload-image', data);
};

// 카카오톡 회원가입
const kakaoSignup = (data: reqKakaoSignupApiData) => {
	return http.post('/api/auth/kakao/sign-up', data);
};

// 카카오톡 로그인
const kakaoLogin = (data: reqKakaoLoginApiData) => {
	return http.post('/api/auth/kakao', data);
};

// 로그아웃
const logout = (data: reqLogoutApiData) => {
	return http.post('/api/auth/sign-out', data);
};

// 회원탈퇴
// const deleteUser = (data: reqDeleteUserApiData) => {
// 	return http.delete('/api/auth/quit', data);
// };

// 닉네임 중복 체크
const checkNickname = (data: reqCheckNicknameApiData) => {
	return http.post('/api/auth/check-nickname', data);
};

// 이메일 중복 체크
const checkEmail = (data: reqCheckEmailApiData) => {
	return http.post('/api/auth/check-email', data);
};

// 휴대폰 인증번호 전송 요청
const phoneSendCode = (data: reqPhoneSendCodeData) => {
	return http.post('/api/auth/phone/send-code', data);
};

// 휴대폰 인증번호 인증 요청
const phoneVerifyCode = (data: reqPhoneVerifyCodeData) => {
	return http.post('/api/auth/phone/verify-code', data);
};

// 아이디 찾기
const findId = (data: reqFindIdApiData) => {
	return http.post('/api/auth/find-id', data);
};

// 비밀번호 초기화 요청
const postPwdVerify = (data: reqPostPwdVerifyApiData) => {
	return http.post('/api/auth/password/verify-user', data);
};

// 비밀번호 초기화
const resetPwd = (data: { newPassword: any; resetToken: { resetToken: string } }) => {
	return http.patch('/api/auth/password/reset', data);
};

const AuthService = {
	signup,
	login,
	uploadImgSignup,
	kakaoSignup,
	kakaoLogin,
	logout,
	checkNickname,
	checkEmail,
	phoneSendCode,
	phoneVerifyCode,
	findId,
	postPwdVerify,
	resetPwd,
};

export default AuthService;
