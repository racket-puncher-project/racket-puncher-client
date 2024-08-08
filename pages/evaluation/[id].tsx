import styled from 'styled-components';
import EvaluationCard from '../../components/contents/my/evaluationCard';
import { pxToRem } from '../../utils/formatter';
import { rem } from 'polished';
import {
	FontFamilyBold,
	FontFamilySemiBold,
	FontSizeLg,
	FontSizeSpLg,
	InputLabelColor,
} from '../../styles/ts/common';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import usersService from '../../service/users/service';
import { RoundButton } from '../../styles/ts/components/buttons';
import useToast from '../../utils/useToast';

export default function EvaluationPage() {
	const router = useRouter();
	const { setMessage } = useToast();
	const [reviewMemberList, setReviewMemberList] = useState([]);

	const getReviewMemberList = async (id) => {
		try {
			const res = await usersService.getReviewData(id);
			const processDataList = res.data.response.map((reviewDataItem) => {
				return {
					...reviewDataItem,
					positiveReviews: [],
					negativeReviews: [],
				};
			});
			setReviewMemberList(processDataList);
		} catch (e) {
			console.log(e);
		}
	};

	const postEvaluation = async () => {
		const params = reviewMemberList.map((reviewMemberItem) => {
			return {
				objectUserId: reviewMemberItem.siteUserId,
				positiveReviews: reviewMemberItem.positiveReviews,
				negativeReviews: reviewMemberItem.negativeReviews,
			};
		});
		try {
			await usersService.postReviewData(router.query.id, params);
			setMessage('success', '평가가 완료되었습니다');
			router.push('/my');
		} catch (e) {
			console.log(e);
		}
		console.log('진입!!', reviewMemberList);
	};

	useEffect(() => {
		if (router.isReady) {
			// 상세 정보 호출
			getReviewMemberList(router.query.id);
		}
	}, [router.isReady]);
	return (
		<>
			<EvaluationContainer>
				<p>평가하기</p>
				<EvaluationCardBox>
					{reviewMemberList.map((reviewMemberItem, reviewMemberIndex) => (
						<EvaluationCard
							key={`${reviewMemberItem}-${reviewMemberIndex}`}
							reviewMemberList={reviewMemberList}
							reviewMemberItem={reviewMemberItem}
							setReviewMemberList={setReviewMemberList}
						/>
					))}
				</EvaluationCardBox>
				<RoundButton colorstyle='is-black' onClick={() => postEvaluation()}>
					평가완료
				</RoundButton>
			</EvaluationContainer>
		</>
	);
}

const EvaluationContainer = styled.div`
	padding: ${(props) =>
		props.theme.isResponsive
			? `${pxToRem('50px')} ${pxToRem('35px')}`
			: `${rem('50px')} ${rem('35px')}`};
	p {
		color: ${InputLabelColor};
		font-family: ${FontFamilySemiBold};
		font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpLg) : rem(FontSizeSpLg))};
		text-align: center;
		margin-bottom: 30px;
	}
`;

const EvaluationCardBox = styled.div``;
