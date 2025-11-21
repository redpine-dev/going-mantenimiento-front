/** @type {import('tailwindcss').Config} */
/**
 * ENHANCED TAILWIND CONFIG FOR GOING GESTIÓN
 *
 * This is an enhanced version of tailwind.config.js that includes
 * direct brand color utilities in addition to the CSS variable-based
 * theme system.
 *
 * USAGE:
 * 1. Rename this file to tailwind.config.js (backup original first)
 * 2. Or copy the extended sections into your existing config
 *
 * BENEFITS:
 * - Direct access to brand colors via utilities like bg-going-blue
 * - Extended color scales for granular control
 * - Custom animations matching brand personality
 * - Enhanced typography scale with Overpass weights
 * - Additional shadow utilities
 * - Extended spacing scale for consistent layouts
 */

import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ============================================
      // FONTS - Going Gestión Typography
      // ============================================
      fontFamily: {
        sans: ['Overpass', 'var(--font-sans)', 'ui-sans-serif', 'sans-serif', 'system-ui'],
        serif: ['Overpass', 'var(--font-serif)', 'ui-sans-serif', 'sans-serif', 'system-ui'],
        mono: ['Overpass Mono', 'var(--font-mono)', 'ui-monospace', 'monospace'],
      },

      // Font Weights - Map to Overpass available weights
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // ============================================
      // COLORS - Going Gestión Brand Colors
      // ============================================
      colors: {
        // Theme system colors (CSS variables)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
          '6': 'hsl(var(--chart-6))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },

        // ============================================
        // DIRECT BRAND COLORS - For explicit use
        // ============================================
        going: {
          // Primary brand colors
          blue: {
            DEFAULT: '#4275fa',
            50: '#f0f5ff',
            100: '#e0eaff',
            200: '#c7daff',
            300: '#a4c1ff',
            400: '#7c9fff',
            500: '#4275fa', // Main Going Gestión blue
            600: '#2355e8',
            700: '#1a40c5',
            800: '#1a369f',
            900: '#1b347e',
            950: '#16204c',
          },
          lime: {
            DEFAULT: '#bdff3b',
            50: '#f7ffe5',
            100: '#ecffc7',
            200: '#daff96',
            300: '#c4ff5a',
            400: '#bdff3b', // Main Going lime green
            500: '#9eeb0e',
            600: '#7bc206',
            700: '#5d920a',
            800: '#4a720f',
            900: '#3e6112',
            950: '#1f3602',
          },
          teal: {
            DEFAULT: '#4ba9be',
            50: '#f1fbfd',
            100: '#ddf4f9',
            200: '#c1e9f4',
            300: '#96d9eb',
            400: '#63c0dc',
            500: '#4ba9be', // Main Going teal
            600: '#2f8ba6',
            700: '#2a6f87',
            800: '#285c6f',
            900: '#264d5e',
            950: '#153240',
          },
          navy: {
            DEFAULT: '#1b1a35',
            50: '#f5f5f8',
            100: '#e9e9ef',
            200: '#d0d0dc',
            300: '#a8a7c0',
            400: '#78779f',
            500: '#595885',
            600: '#47466d',
            700: '#3b3a59',
            800: '#34334b',
            900: '#1b1a35', // Main Going navy
            950: '#0f0e1d',
          },

          // Secondary palette
          pink: '#dc99bc',
          magenta: '#c15294',
          purple: '#8e1c7d',
          orange: '#ff5b04',

          // Neutrals
          dark: '#2f2f2f',
          light: '#f6f6f6',
        },

        // ============================================
        // UTILITY COLORS - Extended semantic colors
        // ============================================
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },

      // ============================================
      // BORDER RADIUS - Going Design System
      // ============================================
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        // Additional utilities
        'xl': 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
      },

      // ============================================
      // SPACING - Extended scale for consistency
      // ============================================
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },

      // ============================================
      // TYPOGRAPHY - Enhanced scale
      // ============================================
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },

      // Letter Spacing
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.05em',
      },

      // ============================================
      // SHADOWS - Going Design System
      // ============================================
      boxShadow: {
        '2xs': 'var(--shadow-2xs)',
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        // Brand-specific shadows
        'going-blue': '0 4px 14px 0 rgba(66, 117, 250, 0.39)',
        'going-lime': '0 4px 14px 0 rgba(189, 255, 59, 0.39)',
        'going-glow': '0 0 20px rgba(66, 117, 250, 0.3)',
      },

      // ============================================
      // ANIMATIONS - Brand personality
      // ============================================
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        // Custom Going animations
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(66, 117, 250, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(66, 117, 250, 0.5)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        // Sidebar animations
        'logo-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'avatar-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
          },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        // Sidebar animations
        'logo-pulse': 'logo-pulse 3s ease-in-out infinite',
        'avatar-pulse': 'avatar-pulse 3s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },

      // ============================================
      // BACKGROUND IMAGES - Gradient utilities
      // ============================================
      backgroundImage: {
        'going-gradient': 'linear-gradient(135deg, #4275fa 0%, #4ba9be 50%, #bdff3b 100%)',
        'going-gradient-subtle': 'linear-gradient(135deg, #4275fa 0%, #4ba9be 100%)',
        'going-gradient-reverse': 'linear-gradient(135deg, #bdff3b 0%, #4ba9be 50%, #4275fa 100%)',
        'going-gradient-radial': 'radial-gradient(circle, #4275fa 0%, #4ba9be 50%, #bdff3b 100%)',
      },

      // ============================================
      // TRANSITIONS - Smooth interactions
      // ============================================
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // ============================================
      // Z-INDEX - Consistent layering
      // ============================================
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // ============================================
      // OPACITY - Extended scale
      // ============================================
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '85': '0.85',
      },
    }
  },

  plugins: [tailwindcssAnimate],
}
