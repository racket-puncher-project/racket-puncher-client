import styled from 'styled-components';
import { rem } from 'polished';
import { Tabs as AntdTabs } from 'antd';
import { pxToRem } from '../../../../utils/formatter';

import { FontSizeMd, PlayerListBGColor, PrimaryColor, ReportColor, WhiteColor } from '../../common';

// ${(props) => (props.theme.isResponsive ? pxToRem('260px') : rem('260px'))};
// ${(props) => (props.theme.isResponsive ? `${pxToRem('10px')} ${pxToRem('20px')}` : `${rem('10px')} ${rem('20px')}`)};

export const CustomTab = styled(AntdTabs)`
  width: 100% !important;
  font-size: inherit !important;
  line-height: 1 !important;
  color: inherit !important;
  div.ant-tabs-nav {
    margin: 0 !important;
    background-color: ${PlayerListBGColor} !important;
    padding: ${(props) =>
            props.theme.isResponsive
                    ? `${pxToRem('10px')} ${pxToRem('20px')}`
                    : `${rem('10px')} ${rem('20px')}`} !important;
    border-radius: 50px !important;
    &::before {
      display: none !important;
    }
    div.ant-tabs-nav-wrap {
      display: block !important;
      &::before {
        display: none !important;
      }
      &::after {
        display: none !important;
      }
      div.ant-tabs-nav-list {
        display: flex !important;
        div.ant-tabs-tab {
          width: ${(props) =>
                  props.theme.isResponsive ? pxToRem('260px') : rem('260px')} !important;
          display: block !important;
          padding: ${(props) =>
                  props.theme.isResponsive ? `${pxToRem('11px')} 0` : `${rem('11px')} 0`} !important;
          font-size: inherit !important;
          margin: 0 !important;
          text-align: center !important;
          font-size: ${(props) =>
                  props.theme.isResponsive ? pxToRem(FontSizeMd) : rem(FontSizeMd)} !important;
          font-family: Pretendard-Regular;
          color: ${ReportColor};
          &.ant-tabs-tab-active {
            width: ${(props) => (props.theme.isResponsive ? pxToRem('260px') : rem('260px'))};
            text-align: center;
            background: ${WhiteColor};
            padding: ${(props) =>
                    props.theme.isResponsive ? `${pxToRem('11px')} 0` : `${rem('11px')} 0`};
            border-radius: 50px;
            border: 1px solid ${PrimaryColor};
            color: ${PrimaryColor} !important;
            .ant-tabs-tab-btn {
              color: ${PrimaryColor};
            }
          }
        }
        div.ant-tabs-ink-bar {
          display: none !important;
        }
      }
    }
    div.ant-tabs-nav-operations {
      display: none !important;
    }
  }
`;
