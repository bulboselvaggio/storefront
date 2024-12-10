import netlify from '@astrojs/netlify';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig, envField } from 'astro/config';

export default defineConfig({
	integrations: [tailwind({ applyBaseStyles: false }), icon(), solidJs()],
	site: 'https://astrostorefront.netlify.app',
	output: 'server',
	adapter: netlify({ imageCDN: true }),
	vite: {
		build: {
			assetsInlineLimit(filePath) {
				return filePath.endsWith('css');
			},
		},
	},
	image: {
		domains: [
			'localhost',
      'a.storyblok.com',
			'astrostorefront.netlify.app',
		],
	},
	experimental: {
		env: {
			schema: {
				STRIPE_SECRET_KEY: envField.string({
					context: 'server',
					access: 'secret',
					default: 'sk_test_51JP2syLYHI0LeDzUHYpQ5ODAmAZADfWrwNS1fz8zpxLtyMKXqfMdMp77a4dKjpEh5WmLlQij2fGRgpoUt6yS1NXV00z37gX0Zr',
				}),
				FATHOM_SITE_ID: envField.string({
					context: 'client',
					access: 'public',
					optional: true,
				}),
				GOOGLE_GEOLOCATION_SERVER_KEY: envField.string({
					context: 'server',
					access: 'secret',
					optional: true,
				}),
				GOOGLE_MAPS_BROWSER_KEY: envField.string({
					context: 'client',
					access: 'public',
					optional: true,
				}),
				LOOPS_API_KEY: envField.string({
					context: 'server',
					access: 'secret',
					optional: true,
				}),
				LOOPS_SHOP_TRANSACTIONAL_ID: envField.string({
					context: 'server',
					access: 'public',
					optional: true,
				}),
				LOOPS_FULFILLMENT_TRANSACTIONAL_ID: envField.string({
					context: 'server',
					access: 'public',
					optional: true,
				}),
				LOOPS_FULFILLMENT_EMAIL: envField.string({
					context: 'server',
					access: 'public',
					optional: true,
				}),
				SHOP_API_URL: envField.string({
					context: 'server',
					access: 'public',
					optional: true,
				}),
				SHOP_API_KEY: envField.string({
					context: 'server',
					access: 'secret',
					optional: true,
				}),
				US_SHIPPING_RATE_ID: envField.string({
					context: 'server',
					access: 'secret',
					default: 'shr_1QUBcPLYHI0LeDzU6cdaJjEf', // shipping standard
				}),
				INTERNATIONAL_SHIPPING_RATE_ID: envField.string({
					context: 'server',
					access: 'secret',
					default: 'shr_1QUBjmLYHI0LeDzUQx8jlhad', // shipping international
				}),
			},
		},
	},
});
