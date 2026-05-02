import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        bg: '#0a0a0a',
        fg: '#f0f0f0',
        accent: '#c8f060',
        cyan: '#60d4f0',
        muted: '#666666',
        border: '#1f1f1f',
        surface: '#101010',
        raised: '#171717',
      },
    },
  },
  plugins: [],
}

export default config
