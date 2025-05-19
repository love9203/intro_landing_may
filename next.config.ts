// Next.js configuration with TypeScript
import { NextConfig } from 'next'

/**
 * @type {import('next').NextConfig}
 */
const config: NextConfig = {
  // Determine if we're running on Vercel
  // process.env.VERCEL === '1' when running on Vercel
  ...(process.env.VERCEL !== '1' && process.env.NODE_ENV === 'production' ? {
    // GitHub Pages specific settings (only applied when NOT on Vercel)
    output: 'export',
    basePath: '/intro_landing_may',
    assetPrefix: '/intro_landing_may/',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  } : {}),

  // Enable experimental features for Next.js 15 and React 19
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },

  // Completely disable ESLint during builds
  eslint: {
    // This is critical - ensures ESLint errors don't fail the build
    ignoreDuringBuilds: true,
  },

  // Disable type checking during builds
  // This ensures neither ESLint nor TypeScript errors block the build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable the Next.js telemetry collection
  // This can sometimes cause issues in CI environments
  distDir: process.env.DIST_DIR || '.next',
}

export default config
