import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MatchingCard from '../card';
import Service from '../../../../service/matches/service';
import { v4 as uuidv4 } from 'uuid';
import { prefix } from '../../../../constants/prefix';
import { pxToRem } from '../../../../utils/formatter';
import { rem } from 'polished';
import NoResultBox from '../../../common/noResult';
import useLoading from '../../../../utils/useLoading';

export default function MyAroundMatching() {
	const [map, setMap] = useState(null);
	const [infowindows, setInfowindows] = useState([]);
	const [selectedMarker, setSelectedMarker] = useState(null);
	let aroundPositions = [];
	const [matchingList, setMatchingList] = useState([]);
	const { showLoading, hideLoading } = useLoading();

	useEffect(() => {
		showLoading();
		const container = document.getElementById('kakao-map');

		const customMyMarkerImageUrl = `${prefix}/svg/map-my-pin.svg`;
		const customMarkerImageUrl = `${prefix}/images/map-pin.png`;
		const imageSize = new kakao.maps.Size(28, 40);
		// 마커의 끝점을 기준으로 이미지가 표시
		const imageOption = { offset: new kakao.maps.Point(27, 69) };

		// 커스텀 마커 이미지 생성
		const customMarkerImage = new kakao.maps.MarkerImage(
			customMarkerImageUrl,
			imageSize,
			imageOption
		);

		const customMyMarkerImage = new kakao.maps.MarkerImage(
			customMyMarkerImageUrl,
			imageSize,
			imageOption
		);

		// 내위치 핀찍기 ----------------------------------------------------------
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const lat = position.coords.latitude;
					const lng = position.coords.longitude;
					await getMatchingList(lat, lng);

					const options = {
						center: new kakao.maps.LatLng(lat, lng),
						level: 3,
					};

					const kakaoMap = new kakao.maps.Map(container, options);
					setMap(kakaoMap);

					kakaoMap.setCenter(new kakao.maps.LatLng(lat, lng));

					const userMarker = new kakao.maps.Marker({
						map: kakaoMap,
						position: new kakao.maps.LatLng(lat, lng),
						image: customMyMarkerImage,
					});

					// const userInfowindow = new kakao.maps.InfoWindow({
					// 	content: '<div class="custom-infowindow"">내 위치</div>',
					// });
					// userInfowindow.open(kakaoMap, userMarker);
					// infowindows.push(userInfowindow); // infoWindow ----------------------------------------------------------
					const newInfowindows = aroundPositions.map((position) => {
						const marker = new kakao.maps.Marker({
							map: kakaoMap,
							position: new kakao.maps.LatLng(position.lat, position.lng),
							image: customMarkerImage,
						});

						// const infowindow = new kakao.maps.InfoWindow({
						// 	content: `
						// 		<div class="custom-infowindow">
						// 			<h4>${position.title}</h4>
						// 		</div>
						// 	`,
						// 	removable: true,
						// });

						// kakao.maps.event.addListener(marker, 'click', () => {
						// 	infowindows.forEach((iw, idx) => {
						// 		if (idx !== 0) iw.close();
						// 	});
						// 	infowindow.open(kakaoMap, marker);
						// 	setSelectedMarker(marker); // 선택된 마커 업데이트
						// 	kakaoMap.setCenter(marker.getPosition());
						// });

						return marker;
					});
					setInfowindows([...infowindows, ...newInfowindows]);
				},
				(error) => {
					console.error('error: ' + error.message);
				}
			);
			hideLoading();
		} else {
			// Geolocation API 사용 불가능 시 기본 위치로 설정
			const defaultOptions = {
				center: new kakao.maps.LatLng(33.450705, 126.570677),
				level: 3,
			};
			const kakaoMap = new kakao.maps.Map(container, defaultOptions);
			setMap(kakaoMap);
			hideLoading();
		}
	}, []);

	const getMatchingList = async (lat: any, lng: any) => {
		const payload = {
			lat,
			lon: lng,
		};
		try {
			const res = await Service.getMapMatchingList(payload);
			setMatchingList(res.data.response.content);
			const processRes = res.data.response.content.map((maps) => {
				return {
					content: `<div>${maps.title}</div>`,
					title: maps.title,
					lat: maps.lat,
					lng: maps.lon,
				};
			});
			aroundPositions = processRes;
			// setAroundPositions(processRes);
		} catch (e) {
			console.log(e);
		}
	};

	const handleButtonClick = (position, index) => {
		if (map) {
			const markerPosition = new kakao.maps.LatLng(position.lat, position.lon);
			map.setCenter(markerPosition);

			// infowindows.forEach((iw, idx) => {
			// 	if (index === idx) {
			// 		iw.open(map, selectedMarker);
			// 	} else {
			// 		iw.close();
			// 	}
			// });
		}
	};

	return (
		<>
			<MyAroundMatchingContainer>
				<MapBox>
					<div id={'kakao-map'} style={{ width: '100%', height: '400px' }}></div>
				</MapBox>
				{matchingList.map((position, index) => (
					<div key={uuidv4()}>
						<MatchingCard
							matchingStartDateTime={position.matchingStartDateTime}
							matchingType={position.matchingType}
							locationImg={position.locationImg}
							ntrp={position.ntrp}
							reserved={position.reserved}
							title={position.title}
							onClick={() => handleButtonClick(position, index)}></MatchingCard>
					</div>
				))}
				{matchingList.length === 0 && <NoResultBox />}
			</MyAroundMatchingContainer>
		</>
	);
}

const MyAroundMatchingContainer = styled.div`
	.custom-infowindow {
		width: ${(props) => (props.theme.isResponsive ? `${pxToRem('150px')}` : `${rem('150px')}`)};
		height: ${(props) => (props.theme.isResponsive ? `${pxToRem('23px')}` : `${rem('23px')}`)};
		text-align: center;
		line-height: ${(props) => (props.theme.isResponsive ? `${pxToRem('23px')}` : `${rem('23px')}`)};
		margin: ${(props) => (props.theme.isResponsive ? `${pxToRem('20px')} 0` : `${rem('20px')} 0`)};
	}
`;

const MapBox = styled.div`
	margin: ${(props) => (props.theme.isResponsive ? `${pxToRem('20px')} 0` : `${rem('20px')} 0`)};
`;
