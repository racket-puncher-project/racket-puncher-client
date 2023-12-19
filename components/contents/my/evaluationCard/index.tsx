import styled from 'styled-components';
import { ImageBox } from '../../../../styles/ts/components/box';
import { prefix } from '../../../../constants/prefix';
import { SquareButton } from '../../../../styles/ts/components/buttons';
import React from 'react';
import {
	FontFamilyMedium,
	FontSizeLg,
	InputBorderColor,
	InputLabelColor
} from "../../../../styles/ts/common";
import {rem} from "polished";
import {pxToRem} from "../../../../utils/formatter";

export default function EvaluationCard() {

	return (
		<>
			<EvaluationCardContainer>
				<EvaluationCardBox>
					<ProfileContainer>
						<ProfileImgBox>
							<ImageBox width='80px' height='80px'>
								<img src={`${prefix}/images/profile-img.png`} alt='profile-img' />
							</ImageBox>
						</ProfileImgBox>

						<ProfileTextBox>TESTER-1</ProfileTextBox>
					</ProfileContainer>

					<CardBoxes>
						<Cards>
							<ButtonArea >
								<SquareButton
									width='150px'
									height='40px'
									colorstyle={'is-whiteBlack'}
									bordercolor={'is-whiteBlack'}>
									친절해요
								</SquareButton>
							</ButtonArea>
						</Cards>

						<Cards>
							<ButtonArea>
								<SquareButton
									width='150px'
									height='40px'
									colorstyle={'is-whiteBlack'}
									bordercolor={'is-whiteBlack'}>
									노쇼했어요
								</SquareButton>
							</ButtonArea>
							<ButtonArea>
								<SquareButton
									width='150px'
									height='40px'
									colorstyle={'is-whiteBlack'}
									bordercolor={'is-whiteBlack'}>
									노쇼했어요
								</SquareButton>
							</ButtonArea>
							<ButtonArea>
								<SquareButton
									width='150px'
									height='40px'
									colorstyle={'is-whiteBlack'}
									bordercolor={'is-whiteBlack'}>
									노쇼했어요
								</SquareButton>
							</ButtonArea>
							<ButtonArea>
								<SquareButton
									width='150px'
									height='40px'
									colorstyle={'is-whiteBlack'}
									bordercolor={'is-whiteBlack'}>
									노쇼했어요
								</SquareButton>
							</ButtonArea>
							<ButtonArea>
								<SquareButton
									width='150px'
									height='40px'
									colorstyle={'is-whiteBlack'}
									bordercolor={'is-whiteBlack'}>
									노쇼했어요
								</SquareButton>
							</ButtonArea>
						</Cards>
					</CardBoxes>
				</EvaluationCardBox>
			</EvaluationCardContainer>
		</>
	);
}

const EvaluationCardContainer = styled.div`
	border-radius: 10px;
	border: 1px solid ${InputBorderColor};
	padding: 10px;
	margin-bottom: 20px;
`;
const EvaluationCardBox = styled.div``;
const ProfileContainer = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	margin-bottom: 20px;
`;
const ProfileImgBox = styled.div``;
const ProfileTextBox = styled.div`
	color: ${InputLabelColor};
	font-family: ${FontFamilyMedium};
	font-size: ${(props) => props.theme.isResponsive ? pxToRem(FontSizeLg) : rem(FontSizeLg)};
`;
const CardBoxes = styled.div``;
const ButtonArea = styled.div`
	margin-right: 9px;
`;
const Cards = styled.div`
	display: flex;
	overflow: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	&::-webkit-scrollbar {
		display: none;
	}
	
	&:first-child {
		margin-bottom: 10px;
	}
`;
