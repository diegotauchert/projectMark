import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#EDF2F7',
        gray800: '#2D3748',
        blueHighlight: '#2462D1',
        blueBorder: '#BFCFE0',
        s1: '#DABFFF',
        s1Light: '#E9D9FF',
        s1Lighter: '#F7F1FF',
        s1Darker: '#46426D',
        s2: '#FFD6B3',
        s2Light: '#FFE4CC',
        s2Lighter: '#FEF6EF',
        s2Darker: '#66421F',
        s3: '#99D1FF',
        s3Light: '#BFE3FF',
        s3Lighter: '#E6F4FF',
        s3Darker: '#003A66',
        s4: '#81DDE5',
        s4Light: '#AAECF2',
        s4Lighter: '#DEF5F7',
        s4Darker: '#2A5154',
        s5: '#FFBFD2',
        s5Light: '#FFD9E4',
        s5Lighter: '#FFF2F6',
        s5Darker: '#773A47',
        s6: '#CBD5E0',
        s6Light: '#E2E8F0',
        s6Lighter: '#F2F7FA',
        s6Darker: '#4A5568',
      },
      fontSize: {
        small: ['0.656rem', '0.884rem'],
        title: ['1.641rem', '2.138rem'],
        mdLarge: ['1.063rem', '1.19rem']
      },
      minHeight: {
        auto: 'auto',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
