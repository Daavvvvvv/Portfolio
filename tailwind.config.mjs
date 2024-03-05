/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            animation: {
                'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)'
            }
        },
    },
    plugins: [],
    safelist: ['dark'],
}