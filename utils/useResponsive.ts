import { responsiveState } from '../lib/store/common';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const useResponsive = () => {
	const setResponsive = useSetRecoilState(responsiveState);
	const isResponsive = useRecoilValue(responsiveState);

	return { setResponsive, isResponsive };
};

export default useResponsive;
