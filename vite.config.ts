import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/test': {
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/test/, ''),
			}
		}
	}
};

export default config;
