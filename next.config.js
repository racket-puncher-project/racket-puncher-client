/** @type {import('next').NextConfig} */

module.exports = {
	// basePath: '/racket-puncher-client',
	// assetPrefix: 'https://racket-puncher-project.github.io/racket-puncher-client/',
	env: {
		KAKAO_MAPS_APP_KEY: '20bd45f114aff9ec8fee730fe2453f5c',
	},
	webpack: (config) => {
		// `net` 모듈이 요구되는 경우 빈 객체로 대체
		config.resolve.fallback = { net: false, ...config.resolve.fallback };
		return config;
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/main',
				permanent: true,
			},
		];
	},
	assetPrefix: process.env.NODE_ENV === 'production' ? '/racket-puncher-client/' : '',
	trailingSlash: true,
};
