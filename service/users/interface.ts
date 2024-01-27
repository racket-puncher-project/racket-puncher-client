// 회원 정보 수정
export interface reqModifyMyPageApiData {
	nickname: string;
	phoneNumber: string;
	gender: string;
	ntrp: string;
	address: string;
	zipCode: string;
	profileImg: string;
	ageGroup: string;
	password?: string;
	checkPassword?: string;
}

// 리뷰하기
export interface reqPostReviewApiData {
	objectUserId: number;
	positiveReviews: Array<any>;
	negativeReviews: Array<any>;
}
