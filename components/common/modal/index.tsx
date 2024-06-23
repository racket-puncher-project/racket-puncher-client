import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Modal as AntdModal } from 'antd';
import { ImageBox } from '../../../styles/ts/components/box';
import { BlackColor, FontSizeSpLg } from '../../../styles/ts/common';
import { prefix } from '../../../constants/prefix';
import { pxToRem } from '../../../utils/formatter';

interface IModalProps {
	readonly title?: string;
	readonly children: ReactNode;
	readonly isOpen: boolean;
	readonly heightType?: boolean;
	readonly footerButtons?: ReactElement[];
	readonly isChatModal?: boolean;
	readonly isFooterFixed?: boolean;
	readonly toggleModal: () => void;
	readonly onOk?: () => void;
	readonly onCancel: () => void;
}

export default function ModalBox(props: IModalProps) {
	const handleOk = () => {
		props.toggleModal();
		props.onOk();
	};

	const handleCancel = () => {
		props.toggleModal();
		props.onCancel();
	};

	const CustomHeader = () => {
		return (
			<>
				<CustomHeaderBox>
					<div className='align-box'>
						{props.title && <p>{props.title}</p>}
						<ImageBox width={'34px'} height={'34px'} onClick={handleCancel}>
							<img src={`${prefix}/images/close-icon.png`} alt='close' />
						</ImageBox>
					</div>
				</CustomHeaderBox>
			</>
		);
	};

	return (
		<>
			<CustomModal
				style={{
					width: '580px',
					height: props.heightType ? '90vh' : 'auto',
					overflowY: props.heightType ? 'scroll' : 'visible',
				}}
				closeIcon={false}
				title={CustomHeader()}
				open={props.isOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered={true}
				maskClosable={false}
				isFooterFixed={props.isFooterFixed}
				isChatModal={props.isChatModal}
				footer={props.footerButtons || []}>
				{props.children}
			</CustomModal>
		</>
	);
}

// const CustomModal = styled(AntdModal).withConfig({
// 	shouldForwardProp: (propName) => !['heightType', 'isChatModal'].includes(propName),
// })<IModalProps>`
// 	div.ant-modal-content {
// 		border-radius: 20px !important;
// 		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15) !important;
// 		padding: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))} !important;
// 		height: ${(props) => (props.isChatModal ? '500px' : '100%')} !important;
// 		overflow-y: scroll;

// 		div.ant-modal-header {
// 			padding: ${(props) =>
// 				props.theme.isResponsive ? `${pxToRem('20px')} 0` : `${rem('20px')} 0`};
// 		}
// 		div.ant-modal-body {
// 			height: ${(props) => (props.isChatModal ? '' : props.theme.isResponsive ? '100%' : '100%')};
// 		}
// 	}
// `;

const CustomModal = styled(({ ...props }) => <AntdModal {...props} />)`
	div.ant-modal-content {
		display: ${(props) => (props.isFooterFixed ? 'flex' : 'block')};
		flex-direction: ${(props) => (props.isFooterFixed ? 'column' : '')};
		justify-content: ${(props) => (props.isFooterFixed ? 'space-between' : '')};
		position: relative;
		border-radius: 20px !important;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15) !important;
		padding: ${(props) =>
			props.isFooterFixed
				? '0'
				: props.theme.isResponsive
				  ? pxToRem('20px')
				  : rem('20px')} !important;
		height: ${(props) => (props.isChatModal ? '500px' : '100%')} !important;
		overflow-y: scroll;
	}
	div.ant-modal-header {
		position: ${(props) => (props.isFooterFixed ? 'sticky' : 'static')};
		top: ${(props) => (props.isFooterFixed ? '0' : 'static')};
		padding: ${(props) =>
			props.isFooterFixed
				? props.theme.isResponsive
					? `${pxToRem('30px')} ${pxToRem('15px')}`
					: `${rem('30px')} ${rem('15px')}`
				: props.theme.isResponsive
				  ? `${pxToRem('20px')} 0`
				  : `${rem('20px')} 0`};
	}
	div.ant-modal-body {
		flex: 1 1 auto;
		padding: ${(props) =>
			props.isFooterFixed
				? props.theme.isResponsive
					? `0 ${pxToRem('20px')}`
					: `0 ${rem('20px')}`
				: `0`};
		height: ${(props) => (props.isChatModal ? '' : props.theme.isResponsive ? '100%' : '100%')};
	}
	div.ant-modal-footer {
		padding: ${(props) =>
			props.isFooterFixed
				? props.theme.isResponsive
					? `${pxToRem('20px')}`
					: `${rem('20px')}`
				: `0`};
		background-color: ${(props) => (props.isFooterFixed ? '#ffffff' : 'inherit')};
		position: ${(props) => (props.isFooterFixed ? 'sticky' : 'static')};
		bottom: ${(props) => (props.isFooterFixed ? '0' : 'static')};
	}
`;

const CustomHeaderBox = styled.div`
	div.align-box {
		position: relative;

		p {
			font-size: ${(props) =>
				props.theme.isResponsive ? pxToRem(FontSizeSpLg) : rem(`${FontSizeSpLg}`)};
			font-family: Pretendard-Medium;
			color: ${BlackColor};
			text-align: center;
		}

		div.box__ImageBox-sc-1o0dgyy-0 {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			cursor: pointer;
			-webkit-tap-highlight-color: transparent !important;
		}
	}
`;
