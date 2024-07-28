import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com'],
    dangerouslyAllowSVG: true, // Ajoutez cette ligne
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default withPayload(nextConfig)
