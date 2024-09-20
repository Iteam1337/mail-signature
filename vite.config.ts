import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000', // Assuming your backend server is running on port 3000
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
				headers: {
					'X-Forwarded-Email': 'user@example.com' // Example header, replace with actual logic
				}
			}
		}
	}
};

export default config;
