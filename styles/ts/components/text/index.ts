import styled from 'styled-components';
import { rem } from 'polished';

import { FontSizeSpSm, InputErrorColor } from '../../common';
import {pxToRem} from "../../../../utils/formatter";

export const InputErrorText = styled.p`
  font-size: ${(props) => (props.theme.isResponsive ? pxToRem(FontSizeSpSm) : rem(FontSizeSpSm))};
  color: ${InputErrorColor};
  font-family: Pretendard-Regular;
`;
