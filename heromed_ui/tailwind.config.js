/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'e-dark': '#1F1F1F',
      'e-orange': '#DE411B',
      'dark-blue': '#353340',
      'input-text': '#536387',
      'description-text': '#4E4A67',
      'input-border': '#DDE3EC',
      'gray-container': '#E7E7E7',
      'gray-border': '#D9D9D9',
      'accepted': '#0E9B76',
      'table-even-color': '#F5F6FB',
      'approveBg': '#C8E7C8',
      'approveText': '#0C7D0C',
      'pendingBg': '#FFF1C4',
      'pendingText': '#A5922A',
      'declineBg': '#FFCED2',
      'declineText': '#A94643',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
