/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans KR', 'ui-sans-serif', 'system-ui'],
      'serif': ['Song Myung', 'ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    }
  }
};
