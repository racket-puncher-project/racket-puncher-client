import styled from 'styled-components';
import {rem} from 'polished';

import {FontSizeSpSm, ReportColor, WhiteColor} from '../../common';
import {pxToRem} from "../../../../utils/formatter";

interface IBadgeProps {
    readonly padding?: string;
    readonly color?: string;
    readonly fontsize?: string;
}

export const CustomBadge = styled.span.withConfig({
    shouldForwardProp: (props) => props !== 'fontsize',
})<IBadgeProps>`
  display: block;
  padding: ${(props) => (props.theme.isResponsive ? `0 ${pxToRem('12px')}` : `0 ${rem('12px')}`)};
  height: ${(props) => props.theme.isResponsive ? pxToRem('30px') : rem('30px')};
  flex-shrink: 0;
  background-color: ${(props) => props.color || ReportColor};
  border-radius: 5px;
  color: ${WhiteColor};
  font-family: Pretendard-Regular;
  font-size: ${(props) => (props.theme.isResponsive ? pxToRem(props.fontsize || FontSizeSpSm) : rem(props.fontsize || FontSizeSpSm))};
  display: flex;
  justify-content: center;
  align-items: center;
`;
