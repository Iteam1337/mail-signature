import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/test': {
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/test/, ''),
				headers: {
					'X-Forwarded-Email': 'user@example.com' // Example header, replace with actual logic
				}
			}
		}
	}
};

export default config;
