/** @type {import('next').NextConfig} */

module.exports = {
	basePath: process.env.NODE_ENV === 'production' ? '/racket-puncher-client' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/racket-puncher-client/' : '',
	env: {
		KAKAO_MAPS_APP_KEY: '20bd45f114aff9ec8fee730fe2453f5c',
		ASSET_PREFIX: 'https://racket-puncher-project.github.io/racket-puncher-client',
	},
	webpack: (config) => {
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
	trailingSlash: true,
};
