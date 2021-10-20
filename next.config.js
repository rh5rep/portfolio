module.exports = {
  distDir: "out",
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/index",
        permanent: true,
      },
    ];
  },
};
