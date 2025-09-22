/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003366",      // Deep ocean blue
        secondary: "	#50C878",    // A slightly darker, richer sky blue
        tertiary: "#00BFA6",     // Aqua teal
        accent: "	#7CFC00",      // A vibrant lime green
        neutral: {
          light: "#F5F5F5",
          dark: "#FFFFFF", // Reverted to a light background color
        },
        glass: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        sub: ["Lato", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(102, 178, 255, 0.5)",
        card: "0 8px 30px rgba(0,0,0,0.2)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #003366, #66B2FF, #50C878)",
        "glass-card": "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        "gradient-fluid": "linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-tertiary))",
      },
      keyframes: {
        fadeInSlideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        fluidGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInSlideUp 0.8s ease-out forwards",
        "button-pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fluid-gradient": "fluidGradient 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
