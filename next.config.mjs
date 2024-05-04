/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    output: "export",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
