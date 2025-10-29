/**@type {import('tailwindcss').Config}  */
export default {
    content: [
        "./index.html",
        "./src/**/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif']
            },
            gridTemplateColumns: {
                '70/30': '70% 28%',
            },
            colors: { 
                bg:'#0B1E2d', text:'#ffffff', accent:'#D4AF37' 
            },
            boxShadow: { 
                soft:'0 6px 24px rgba(0,0,0,0.18)' 
            }
        },
    },
    plugins: [],
}
