/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    images: {
        unoptimized: true
    },
    output: 'export'
}

module.exports = nextConfig
