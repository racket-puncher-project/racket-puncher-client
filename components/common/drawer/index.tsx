import { ReactNode } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import type { DrawerProps } from 'antd';
import { Drawer as AntdDrawer } from 'antd';

import { ImageBox } from '../../../styles/ts/components/box';
import { BlackColor, FontSizeSpLg } from '../../../styles/ts/common';
import { prefix } from '../../../constants/prefix';
import { pxToRem } from '../../../utils/formatter';

interface IDrawerProps {
	readonly title?: string;
	readonly isOpen: boolean;
	readonly children: ReactNode;
	readonly placement: DrawerProps['placement'];
	readonly height?: string;
	readonly width?: string;
	readonly toggleDrawer: () => void;
}

export default function DrawerBox(props: IDrawerProps) {
	const handleClose = () => {
		props.toggleDrawer();
	};

	const CustomHeader = () => {
		return (
			<>
				<CustomHeaderBox>
					<div className='align-box'>
						{props.title && <p>{props.title}</p>}
						<ImageBox width={'34px'} height={'34px'} onClick={handleClose}>
							<img src={`${prefix}/images/close-icon.png`} alt='close' />
						</ImageBox>
					</div>
				</CustomHeaderBox>
			</>
		);
	};

	return (
		<>
			<CustomDrawer
				title={CustomHeader()}
				maskClosable={false}
				placement={props.placement}
				open={props.isOpen}
				width={props.width}
				height={props.height}
				closable={false}
				key={props.placement}>
				{props.children}
			</CustomDrawer>
		</>
	);
}

const CustomDrawer = styled(AntdDrawer)`
	max-width: ${(props) => (props.theme.isResponsive ? pxToRem('640px') : rem('640px'))};
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	div.ant-drawer-header {
		flex: none;
		height: ${(props) => (props.theme.isResponsive ? pxToRem('80px') : rem('80px'))};
		padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('30px')}` : `0 ${rem('30px')}`)};
	}

	div.ant-drawer-body {
		padding: ${(props) => (props.theme.isResponsive ? pxToRem('30px') : rem('30px'))};
	}
`;

const CustomHeaderBox = styled.div`
	div.align-box {
		position: relative;

		p {
			${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpLg) : rem(FontSizeSpLg))}
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
