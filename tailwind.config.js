/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          },
          '0%': {
            opacity: 0,
            transform: 'scale3d(.3, .3, .3)',
          },
          '20%': {
            transform: 'scale3d(1.1, 1.1, 1.1)',
          },
          '40%': {
            transform: 'scale3d(.9, .9, .9)',
          },
          '60%': {
            opacity: 1,
            transform: 'scale3d(1.03, 1.03, 1.03)',
          },
          '80%': {
            transform: 'scale3d(.97, .97, .97)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale3d(1, 1, 1)',
          },
        },
        fadeZoomIn: {
          '0%': { opacity: 0, transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'fade-in-up-slow': 'fadeInUp 1.6s ease-out both',
        'fade-in-down': 'fadeInDown 0.6s ease-out both',
        'fade-in-down-slow': 'fadeInDown 1.6s ease-out both',
        'fade-in-left': 'fadeInLeft 0.6s ease-out both',
        'fade-in-left-slow': 'fadeInLeft 1.6s ease-out both',
        'fade-in-right': 'fadeInRight 0.6s ease-out both',
        'fade-in-right-slow': 'fadeInRight 1.6s ease-out both',
        'zoom-in': 'zoomIn 0.5s ease-out both',
        'zoom-in-slow': 'zoomIn 1.2s ease-out both',
        'bounce-in': 'bounceIn 1s ease-out both',
        'fade-zoom-in': 'fadeZoomIn 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};
