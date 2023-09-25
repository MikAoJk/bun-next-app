/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    images: {
        loader: 'akamai',
        path: '/'
    }
}

module.exports = nextConfig
