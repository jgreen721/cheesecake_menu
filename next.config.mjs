/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olo-images-live.imgix.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
