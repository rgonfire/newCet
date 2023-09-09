/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {      
			satoshi_light: ["Satoshi-Light", "sans-serif"],
			satoshi_regular: ["Satoshi-Regular", "sans-serif"],
			satoshi_medium: ["Satoshi-Medium", "sans-serif"],
			satoshi_bold: ["Satoshi-Bold", "sans-serif"],
			satoshi_black: ["Satoshi-Black", "sans-serif"],
			special: ["Dirtyline", "sans-serif"],
		  },
		extend: {},
	},
	plugins: [],
}
