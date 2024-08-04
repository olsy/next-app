/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: '',
            },
        ],
    },
};

import { withVercelToolbar } from '@vercel/toolbar/plugins/next';

export default withVercelToolbar()(nextConfig);
