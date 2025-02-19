/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add these paths
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'health-blue': '#2563eb',
        'medical-green': '#16a34a',
      },
    },
  },
  plugins: [],
}