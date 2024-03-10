/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["al-mashhad-dev-bucket.s3-eu-west-1.amazonaws.com"],
  },
};

export default nextConfig;
