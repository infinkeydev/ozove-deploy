const fs = require('fs');
const path = require('path');
/** @type {import('next').NextConfig} */

const copyFiles = () => {
  try {
    const sourceDirectory = __dirname; // Root directory
    const destinationDirectory = path.join(__dirname, '.next'); // .next directory

    const filesToCopy = ['robots.txt', 'sitemap.xml'];

    const copyFile = (file) => {
      const sourceFile = path.join(sourceDirectory, file);
      const destinationFile = path.join(destinationDirectory, file);

      if (fs.existsSync(sourceFile)) {
        fs.copyFileSync(sourceFile, destinationFile);
        console.log(`${file} was copied to .next directory`);
      } else {
        console.error(`File '${file}' does not exist in the root directory`);
      }
    };

    filesToCopy.forEach((file) => {
      copyFile(file);
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
};


if (process.env.NODE_ENV === 'production') {
  copyFiles();
}


const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
