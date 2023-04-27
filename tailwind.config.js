/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-space-600)",
                "primary-hover": "var(--color-space-500)",
                "background-game": "var(--color-background-game)",
                "dark-mode": "var(--color-neutral-100)",
                divider: "var(--color-midnight-400)",
                midnight: {
                    100: "var(--color-midnight-100)",
                    200: "var(--color-midnight-200)",
                    300: "var(--color-midnight-300)",
                    400: "var(--color-midnight-400)",
                    500: "var(--color-midnight-500)",
                    550: "var(--color-midnight-550)",
                    600: "var(--color-midnight-600)",
                    700: "var(--color-midnight-700)",
                    800: "var(--color-midnight-800)",
                    900: "var(--color-midnight-900)",
                },
                ocean: {
                    200: "var(--color-ocean-200)",
                    300: "var(--color-ocean-300)",
                    400: "var(--color-ocean-400)",
                    500: "var(--color-ocean-500)",
                    600: "var(--color-ocean-600)",
                    700: "var(--color-ocean-700)",
                    800: "var(--color-ocean-800)",
                },
                orange: {
                    400: "var(--color-orange-400)",
                    500: "var(--color-orange-500)",
                    550: "var(--color-orange-550)",
                    600: "var(--color-orange-600)",
                    650: "var(--color-orange-650)",
                    700: "var(--color-orange-700)",
                },
                scarlet: {
                    400: "var(--color-scarlet-400)",
                    500: "var(--color-scarlet-500)",
                    600: "var(--color-scarlet-600)",
                    700: "var(--color-scarlet-700)",
                    800: "var(--color-scarlet-800)",
                },
                space: {
                    100: "var(--color-space-100)",
                    200: "var(--color-space-200)",
                    250: "var(--color-space-250)",
                    300: "var(--color-space-300)",
                    400: "var(--color-space-400)",
                    500: "var(--color-space-500)",
                    600: "var(--color-space-600)",
                    650: "var(--color-space-650)",
                    700: "var(--color-space-700)",
                    750: "var(--color-space-750)",
                    800: "var(--color-space-800)",
                    850: "var(--color-space-850)",
                    880: "var(--color-space-880)",
                    900: "var(--color-space-900)",
                    950: "var(--color-space-950)",
                },
                neutral: {
                    50: "var(--color-neutral-50)",
                    100: "var(--color-neutral-100)",
                    200: "var(--color-neutral-200)"
                },
                jade: {
                    300: "var(--color-jade-300)",
                    400: "var(--color-jade-400)",
                    500: "var(--color-jade-500)",
                },
                burble: {
                    200: "var(--color-burble-200)",
                    250: "var(--color-burble-250)",
                    300: "var(--color-burble-300)",
                    350: "var(--color-burble-350)",
                    400: "var(--color-burble-400)",
                },
                carol: {
                    300: "var(--color-carol-300)",
                },
            },
        },
    },
    plugins: [],
}

