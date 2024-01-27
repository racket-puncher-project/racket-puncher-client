import styled from 'styled-components';
import { rem } from 'polished';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { ImageBox } from '../../styles/ts/components/box';
import { prefix } from '../../constants/prefix';
import { BlackColor, FontSizeLg, FontSizeSpSm } from '../../styles/ts/common';
import { pxToRem } from '../../utils/formatter';
import usersService from '../../service/users/service';
import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';

export default function AlarmPage() {
	const [alarmData, setAlaramData] = useState([]);

	const getNotificationList = async () => {
		const res = await usersService.getNotificationData();
		console.log(res.data.response);
		setAlaramData(res.data.response);
	};

	useEffect(() => {
		getNotificationList();
	}, [alarmData]);

	return (
		<>
			<PageTitleArea>
				<PageMainTitle>알림</PageMainTitle>
			</PageTitleArea>
			<AlarmList>
				{alarmData?.map((alarmItem, alarmIndex) => {
					return (
						<>
							<AlarmListItem key={'alarmItem' + alarmIndex}>
								<div className='left-box'>
									<p className='title'>{alarmItem.title}</p>
									<p className='contents'>{alarmItem.content}</p>
								</div>
								<ImageBox width={'40px'} height={'40px'}>
									<img src={`${prefix}/svg/bell-icon.svg`} alt='알림' />
								</ImageBox>
							</AlarmListItem>
						</>
					);
				})}
			</AlarmList>
		</>
	);
}

const PageTitleArea = styled.div`
	margin: 50px auto;
`;

const AlarmList = styled.ul`
	width: 100%;
`;

const AlarmListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};
	border-radius: 20px;
	border: 1px solid #dcdcdc;
	background: #f9f9f9;
	margin-bottom: 20px;

	div.left-box {
		p {
			&.title {
				font-family: Pretendard-Bold;
				color: ${BlackColor};
				font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg))};
				margin-bottom: 5px;
			}

			&.contents {
				font-family: Pretendard-Regular;
				color: ${BlackColor};
				font-size: ${(props) =>
					props.theme.isResponsive ? pxToRem(FontSizeSpSm) : rem(FontSizeSpSm)};
			}
		}
	}
`;
