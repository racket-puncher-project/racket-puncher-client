// 회원가입
export interface reqSignupApiData {
	email: string;
	password: string;
	nickname: string;
	phoneNumber: string;
	siteUserName: string;
	gender: string;
	ntrp: string;
	address: string;
	zipCode: string;
	profileImg: string;
	ageGroup: string;
}

// 로그인
export interface reqLoginApiData {
	email: string;
	password: string;
}

// 토큰 재발행
export interface reqRefreshTokenApiData {
	accessToken: string;
}

// 회원가입 프로필 이미지
export interface reqUploadImgSignupApiData {
	imageFile: any;
}

// 카카오톡 회원가입
export interface reqKakaoSignupApiData {
	email: string;
}

// 카카오톡 로그인
export interface reqKakaoLoginApiData {
	code: string;
}

// 로그아웃
export interface reqLogoutApiData {
	accessToken: string;
}

// 회원탈퇴
export interface reqDeleteUserApiData {
	email: string;
	password: string;
}

// 닉네임 중복 체크
export interface reqCheckNicknameApiData {
	nickname: string;
}

// 이메일 중복 체크
export interface reqCheckEmailApiData {
	email: string;
}

// 핸드폰 인증
export interface reqPhoneSendCodeData {
	phoneNumber: string;
}

// 인증번호 확인
export interface reqPhoneVerifyCodeData {
	phoneNumber: string;
	authCode: string;
}

// 이메일 인증 링크 전송
export interface reqEmailVerifyApiData {
	email: string;
	password: string;
}

// 아이디 찾기
export interface reqFindIdApiData {
	phoneNumber: string;
}

// 비밀번호 초기화 요청
export interface reqPostPwdVerifyApiData {
	email: string;
	phoneNumber: string;
}

// 비밀번호 초기화
export interface reqResetPwdApiData {
	resetToken: string;
	newPassword: string;
}
