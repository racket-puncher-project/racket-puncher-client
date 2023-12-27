import { Select as AntdSelect } from 'antd';
import styled from 'styled-components';
import { rem } from 'polished';

import { InputBorderColor, InputBoxColor, PrimaryColor } from '../../common';
import { pxToRem } from '../../../../utils/formatter';

export const CustomSelect = styled(AntdSelect)`
  height: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
  margin-bottom: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};

  .ant-select-selector {
    border: 1px solid ${InputBorderColor} !important;
    background: ${InputBoxColor} !important;
    border-radius: 5px !important;
    padding: ${(props) =>
            props.theme.isResponsive ? `0 ${pxToRem('15px')}` : `0 ${rem('15px')}`} !important;
  }

  &.ant-select-focused {
    div.ant-select-selector {
      border: 1px solid ${PrimaryColor} !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
`;
