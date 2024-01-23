/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Modify the mainFields property
        config.resolve = {
          ...config.resolve,
          mainFields: ['main', 'module'],
        };
    
        return config;
    }
}

module.exports = nextConfig
