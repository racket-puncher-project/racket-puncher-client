import styled from 'styled-components';
import { rem } from 'polished';
import { Radio as AntdRadio, ConfigProvider } from 'antd';
import { InputBorderColor, InputBoxColor, InputLabelColor, PrimaryColor } from 'styles/ts/common';

import { Dispatch, SetStateAction } from 'react';

interface IBtnRadioProps {
	readonly id?: string;
	readonly setState: Dispatch<SetStateAction<boolean>>;
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
			<RadioGroup id={props.id} size='large' onChange={(e) => props.setState(e.target.value)}>
				<RadioButton value={true}>예약 O</RadioButton>
				<RadioButton value={false}>예약 X</RadioButton>
			</RadioGroup>
		</ConfigProvider>
	);
}

const RadioGroup = styled(AntdRadio.Group)`
	display: flex;
	flex-direction: row;
	gap: 20px;

	& :not(:first-child)::before {
		width: 0px;
		height: 0px;
	}
`;

const RadioButton = styled(AntdRadio.Button)`
	width: 100%;
	min-height: ${rem('50px')};
	border: 1px solid ${InputBorderColor};
	border-radius: 5px;
	text-align: center;

	& :last-child {
		position: absolute;
		left: 0;
		right: 0;
		top: ${rem('4px')};
	}
`;
