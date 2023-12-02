import { useSetRecoilState, useRecoilValue } from 'recoil';

import { loadingState } from '../lib/store/common';

const useLoading = () => {
	const setLoading = useSetRecoilState(loadingState);
	const isShow = useRecoilValue(loadingState);

	const showLoading = () => setLoading(true);
	const hideLoading = () => setLoading(false);

	return { showLoading, hideLoading, isShow };
};

export default useLoading;
