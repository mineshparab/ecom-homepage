/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Enable SWC minification
    compiler: {
      // Add custom SWC options here
      styledComponents: true, // Example: Enable SWC support for styled-components
      removeConsole: {
        exclude: ['error', 'warn'], // Example: Remove console logs except error and warn
      },
    },
  };
  
  export default nextConfig;