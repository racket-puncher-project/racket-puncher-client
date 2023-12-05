import styled from 'styled-components';
import { rem } from 'polished';

import { pxToRem } from '../../../../utils/formatter';
import { FontFamilyBold, FontSizeSpLg, BlackColor } from '../../common';

export const PageMainTitle = styled.h1`
	text-align: center;
	font-family: ${FontFamilyBold};
	font-size: ${(props) => (props.theme.isResponsive ? pxToRem('28px') : rem(`${FontSizeSpLg}`))};
	color: ${BlackColor};
`;
