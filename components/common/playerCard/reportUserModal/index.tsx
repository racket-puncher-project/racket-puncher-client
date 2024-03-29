import React, { useState, ReactNode, ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import ModalBox from '../../modal';
import { SquareButton } from '../../../../styles/ts/components/buttons';
import { InputBox } from '../../../../styles/ts/components/input';
import { TextArea } from '../../../../styles/ts/components/textarea';
import { pxToRem } from '../../../../utils/formatter';

interface IReportUserModalProps {
	readonly userNickName: string;
	readonly profilePicURL: string;
	readonly isOpen: boolean;
	readonly toggleModal: () => void;
	readonly onCancel: () => void;
	readonly onOk: () => void;
}

export default function ReportUserModal(props: IReportUserModalProps) {
	const { userNickName, profilePicURL, isOpen, toggleModal, onCancel, onOk } = props;
	// userEmail로 회원정보 불러오기
	// useEffect(()=> GET userEmail)
	const [mainText, setMainText] = useState('');
	// onSubmit 구현
	// const submitReport = (e: MouseEvent) => {
	// 	e.preventDefault();
	// 	console.log(e.target.);
	// };

	return (
		<>
			<ModalBox isOpen={isOpen} toggleModal={toggleModal} onCancel={onCancel} onOk={onOk}>
				<UserReportForm>
					<InputBox>
						<label> 사용자 신고하기</label>
						<ReportTextArea
							placeholder='신고 사유를 입력하세요.'
							value={mainText}
							onChange={(e) => setMainText(e.currentTarget.value)}
						/>
					</InputBox>
					<SubmitReportBtn>신고하기</SubmitReportBtn>
				</UserReportForm>
			</ModalBox>
		</>
	);
}

const UserReportForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ReportTextArea = styled(TextArea)`
	height: ${(props) => (props.theme.isResponsive ? pxToRem('140px') : rem('140px'))};
`;

const SubmitReportBtn = styled(SquareButton)`
	width: ${(props) => (props.theme.isResponsive ? pxToRem('180px') : rem('180px'))};
	margin: 0 auto;
`;
