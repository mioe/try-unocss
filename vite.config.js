import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

import {
	presetIcons,
	presetWind,
} from 'unocss'

import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		unocss({
			presets: [
				presetIcons({
					prefix: false,
					collections: {
						'itest': FileSystemIconLoader(
							'./icons',
						)
					},
				}),
				presetWind(),
			],
		}),
	]
})
