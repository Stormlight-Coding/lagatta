const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./browsers/polyfills.js")
      ) {
        entries["main.js"].unshift("./browsers/polyfills.js");
      }

      return entries;
    };

    return config;
  }
});
