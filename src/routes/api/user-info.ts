import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request }) => {
	const email = request.headers.get('x-forwarded-email') || '';
	return new Response(JSON.stringify({ email }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
