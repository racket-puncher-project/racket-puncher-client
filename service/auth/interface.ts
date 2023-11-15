// 회원가입
export interface reqSignupApiData {
	user_id: string;
	nickname: string;
	password: string;
	email: string;
	phone_number: string;
	photo_url: string;
	manner_score: string;
	penalty_score: string;
	gender: string;
	ntrp: string;
	location_si: string;
	location_gu: string;
	age: string;
	signin_date: string;
	auth_check: string;
}

// 로그인
export interface reqLoginApiData {
	email: string;
	password: string;
}

// 카카오톡 회원가입
export interface reqKakaoSignupApiData {
	email: string;
}

// 카카오톡 로그인
export interface reqKakaoLoginApiData {
	authType: string;
	oauthToken: string;
}

// 로그아웃
export interface reqLogoutApiData {
	email: string;
	accessToken: string;
}

// 회원탈퇴
export interface reqDeleteUserApiData {
	email: string;
	password: string;
}

// 아이디 중복 체크
export interface reqCheckIdApiData {
	email: string;
	password: string;
}

// 핸드폰 인증
export interface reqPhoneVerifyApiData {
	phone_number: string;
}

// 이메일 인증 링크 전송
export interface reqEmailVerifyApiData {
	email: string;
	password: string;
}

// 아이디 찾기
export interface reqFindIdApiData {
	email: string;
	password: string;
}

// 비밀번호 찾기 (초기화)
export interface reqFindPwdApiData {
	email: string;
	password: string;
}