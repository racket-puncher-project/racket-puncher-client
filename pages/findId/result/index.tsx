import styled from 'styled-components';
import React from 'react';
import { rem } from 'polished';
import { useRouter } from 'next/router';

import { FontSizeLg } from '../../../styles/ts/common';
import { RoundButton } from '../../../styles/ts/components/buttons';
import { PageMainTitle } from '../../../styles/ts/components/titles';

import { pxToRem } from '../../../utils/formatter';

export default function FindIDResult() {
	const router = useRouter();
	const { email } = router.query;

	const moveToFindPwd = () => {
		const email = Array.isArray(router.query.email) ? router.query.email[0] : router.query.email;
		if (email) {
			router.push(`/findPwd?email=${encodeURIComponent(email)}`);
		}
	};

	return (
		<>
			<FindIDResultContainer>
				<PageMainTitle>아이디 찾기</PageMainTitle>
				<FoundIdContainer>
					회원님의 계정은 <br />
					{email}입니다.
				</FoundIdContainer>

				<ButtonBox>
					<RoundButton colorstyle={'is-green'} onClick={() => router.push('/login')}>
						로그인
					</RoundButton>
					<RoundButton onClick={moveToFindPwd}>비밀번호 찾기</RoundButton>
				</ButtonBox>
			</FindIDResultContainer>
		</>
	);
}

const FindIDResultContainer = styled.div`
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
`;

const FoundIdContainer = styled.div`
	margin: ${rem('100px')} auto;
	text-align: center;
	font-size: ${FontSizeLg};
`;

const ButtonBox = styled.div`
	display: flex;
	gap: 20px;
	margin-top: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
`;
