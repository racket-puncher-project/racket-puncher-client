import styled from 'styled-components';
import { rem } from 'polished';
import { Radio as AntdRadio, ConfigProvider } from 'antd';
import {
	FontSizeSm,
	InputBorderColor,
	InputBoxColor,
	InputLabelColor,
	PrimaryColor,
} from '../../../styles/ts/common';
import { pxToRem } from '../../../utils/formatter';

interface IBtnRadioProps {
	readonly isUpdate?: boolean;
	readonly state?: boolean;
	readonly setState: (stateName: string, value: boolean) => void;
}

export default function ButtonStyleRadio(props: IBtnRadioProps) {
	return (
		<ConfigProvider
			theme={{
				components: {
					Radio: {
						borderRadius: 5,
						buttonBg: `${InputBoxColor}`,
						buttonCheckedBg: `${InputBoxColor}`,
						buttonColor: `${InputLabelColor}`,
						colorPrimary: `${PrimaryColor}`,
						colorPrimaryHover: `${PrimaryColor}`,
						colorPrimaryActive: `${PrimaryColor}`,
					},
				},
			}}>
			<RadioGroup
				size='large'
				value={props.state}
				onChange={(e) => props.setState('isReserved', e.target.value)}>
				<RadioButton value={true}>예약 O</RadioButton>
				<RadioButton value={false}>예약 X</RadioButton>
			</RadioGroup>
		</ConfigProvider>
	);
}

const RadioGroup = styled(AntdRadio.Group)`
	display: flex;
	flex-direction: row;
	gap: ${(props) => (props.theme.isResponsive ? pxToRem('20px') : rem('20px'))};

	& :not(:first-child)::before {
		width: 0px;
		height: 0px;
	}
`;

const RadioButton = styled(AntdRadio.Button)`
	width: 100%;
	min-height: ${(props) => (props.theme.isResponsive ? pxToRem('50px') : rem('50px'))};
	border: 1px solid ${InputBorderColor};
	border-radius: 5px;
	font-size: ${(props) =>
		props.theme.isResponsive ? pxToRem(FontSizeSm) : rem(FontSizeSm)} !important;
	text-align: center;

	span {
		display: block;
		margin: ${(props) => (props.theme.isResponsive ? pxToRem('1px') : rem('5px'))};
	}
`;
