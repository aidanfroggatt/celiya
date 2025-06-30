import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        terracotta: "#B35C42",
        leafy: "#2A4D33",
        radish: "#E94B66",
      }
    }
  }
};

export default config;
