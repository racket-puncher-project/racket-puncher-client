import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useRouter } from 'next/router';

import Header from './Header';
import LoadingSpin from '../common/loading/spin';
import MessageBox from '../common/message';
import ChatRoom from '../contents/chat/ChatRoom';

interface ILayoutProps {
	readonly children: ReactNode;
}

interface ILayoutAlignProps {
	readonly isPadding: boolean;
}

export default function LayoutContainer(props: ILayoutProps) {
	const router = useRouter();
	const [isPadding, setIsPadding] = useState(true);

	useEffect(() => {
		if (router.pathname === '/') {
			setIsPadding(false);
		} else {
			setIsPadding(true);
		}
	}, [router.pathname]);

	return (
		<>
			<LoadingSpin>
				<MessageBox />
				<LayoutWrapper>
					<Header />
					<LayoutAlign isPadding={isPadding}>{props.children}</LayoutAlign>
				</LayoutWrapper>
			</LoadingSpin>
			{/* <ChatRoom /> */}
		</>
	);
}

const LayoutWrapper = styled.div`
	min-height: 100vh;
	max-width: ${rem('640px')};
	margin: auto;
`;

const LayoutAlign = styled.div.withConfig({
	shouldForwardProp: (props) => props !== 'isPadding',
})<ILayoutAlignProps>`
	position: relative;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding: ${(props) => (props.isPadding ? `${rem('0px')} ${rem('10px')}` : 'initial')};
`;
