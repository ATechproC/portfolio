/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    // If you have other directories, add them too:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        "shadow" : "0 5px 10px rgba(0, 0, 0, 0.6)",
        "initial" : "0 5px 10px rgba(0, 0, 0, 0.4)"
      },
      gridTemplateColumns : {
        'auto' : 'repeat(auto-fit, minmax(200, 1fr)',
      }
    },
  },
  plugins: [],
}