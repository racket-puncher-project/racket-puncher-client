import styled from 'styled-components';
import { rem } from 'polished';
import { PageMainTitle } from '../../styles/ts/components/titles';
import { ImageBox } from '../../styles/ts/components/box';
import { prefix } from '../../constants/prefix';
import { BlackColor, FontSizeLg, FontSizeSpSm } from '../../styles/ts/common';
import { pxToRem } from '../../utils/formatter';

export default function AlarmPage() {
	// // 서버에서 현재 로그인한 유저의 알림 데이터 가져오기
	// const gottenAlarms = 현재 로그인한 유저의 알림 데이터
	// useEffect(() => {

	// }, [gottenAlarms]);

	const gottenAlarms = [
		{
			alarmId: '',
			alarmTitle: '매칭 취소',
			alarmContent: '의 매칭이 취소 되었습니다.',
			pageURL: '',
		},
		{
			alarmId: '',
			alarmTitle: '경기 디데이!',
			alarmContent: '의 경기날입니다!',
			pageURL: '',
		},
	];

	return (
		<>
			<PageTitleArea>
				<PageMainTitle>알림</PageMainTitle>
			</PageTitleArea>
			<AlarmList>
				{gottenAlarms.map((item, index) => {
					return (
						<>
							<AlarmListItem key={'alarm' + index}>
								<div className='left-box'>
									<p className='title'>{ item.alarmTitle }</p>
									<p className='contents'>{ item.alarmContent }</p>
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
	padding: ${(props) => (props.theme.isResponsive ? `20px ${pxToRem('20px')}` : `20px ${rem('20px')}`)};
	border-radius: 20px;
	border: 1px solid #DCDCDC;
	background: #F9F9F9;
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
				font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpSm) : rem(FontSizeSpSm))};
			}
		}
	}
`
