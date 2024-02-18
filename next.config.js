/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "http", hostname: "localhost" }],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/proxy/:path*",
        // destination: `${process.env.BACKEND_URL}/:path*`,
        destination: 'http://localhost:5000/:path'
      },
    ];
  },
};

module.exports = nextConfig;
