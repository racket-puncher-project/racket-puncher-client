import styled from 'styled-components';
import { rem } from 'polished';
import {
	FontFamilyRegular,
	FontFamilySemiBold,
	FontSizeLg,
	FontSizeSpSm,
	InputBoxColor,
	InputBorderColor,
	BlackColor,
} from '../../../styles/ts/common';

import { ImageBox } from '../../../styles/ts/components/box';
import { pxToRem } from '../../../utils/formatter';
import { prefix } from '../../../constants/prefix';

interface IAlarmListItemProps {
	alarmTestData: {
		alarmId: string;
		alarmTitle: string;
		alarmContent: string;
		pageTitle: string;
		pageURL: string;
	};
}

export default function AlarmListItem(props: IAlarmListItemProps) {
	const { alarmTitle, alarmContent, pageURL, pageTitle } = props.alarmTestData;
	return (
		<AlarmListItemContainer>
			<AlarmDataArea>
				<AlarmItemTitle>{`${alarmTitle}`} </AlarmItemTitle>
				<AlarmItemContent>
					<span>
						<a href={`${pageURL}`}>{`${pageTitle}`}</a>
					</span>
					{`${alarmContent}`}
				</AlarmItemContent>
			</AlarmDataArea>
			<IconArea>
				<ImageBox width='40px' height='40px'>
					<img src={`${prefix}/svg/bell-icon.svg`} alt='종모양 아이콘' />
				</ImageBox>
			</IconArea>
		</AlarmListItemContainer>
	);
}

const AlarmListItemContainer = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('5px') : rem('5px'))};

	width: 100%;
	max-height: fit-content;
	margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	padding: ${(props) => (props.theme.isResponsive ? pxToRem('15px') : rem('15px'))};
	background-color: ${InputBoxColor};
	border-radius: 20px;
	border: solid 1px ${InputBorderColor};

	box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
`;

const AlarmDataArea = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('10px') : rem('10px'))};
`;

const AlarmItemTitle = styled.div`
	text-align: left;
	font-family: ${FontFamilySemiBold};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
	color: ${BlackColor};
`;
const AlarmItemContent = styled(AlarmItemTitle)`
	font-family: ${FontFamilyRegular};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpSm) : rem(FontSizeSpSm))};
`;

const IconArea = styled.div`
	min-width: ${(props) => (props.theme.isResponsive ? pxToRem('40px') : rem('40px'))};
`;
