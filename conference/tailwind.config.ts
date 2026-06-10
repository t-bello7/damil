import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px"
        },
        extend: {
            fontFamily: {
                maximaNouva: ['MaximaNouva', 'sans-serif'],
                maximaNouvaBold: ['MaximaNouvaBold', 'sans-serif'],
                maximaNouvaSemiBold: ['MaximaNouvaSemiBold', 'sans-serif'],
                maximaNouvaExtraBold: ['MaximaNouvaExtraBold', 'sans-serif'],
                maximaNouvaThin: ['MaximaNouvaThin', 'sans-serif'],
                sfProDisplay: ['SfProDisplay', 'sans-serif'],
                sfProDisplayBold: ['SfProDisplayBold', 'sans-serif']
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    md: '2rem',
                    lg: '4rem'
                }
            },
            colors: {
                gray: {
                    DEFAULT: '#8E8E8E',
                    1: '#BFBFBF',
                    2: '#F6F6F6',
                    3: '#f2f1f3'
                },
                primary: {
                    DEFAULT: 'hsla(198, 94%, 45%, 1)'
                },
                secondary: {
                    DEFAULT: '#EED741'
                },
                dark: {
                    DEFAULT: '#141414'
                },
                white: {
                    DEFAULT: '#FFFFFF'
                },
                blue: {
                    DEFAULT: 'hsla(193, 91%, 31%, 1)',
                    1: 'hsla(183, 100%, 96%, 1)',
                    2: 'hsla(198, 100%, 94%, 1)'
                }
            }
        },
    },
    plugins: [],
};
export default config;
