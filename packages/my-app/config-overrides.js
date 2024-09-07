const {
  override,
  addWebpackPlugin,
  setWebpackPublicPath,
} = require("customize-cra");

const moduleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const deps = require("./package.json").dependencies;

const plugin = new moduleFederationPlugin({
  name: "student",
  filename: "student.js",
  exposes: {
    "./studentModule": "./src/App",
  },
  shared: {
    ...deps,
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});

module.exports = {
  webpack: override(
    (config, env) => {
      // 修改打包输出output
      return config;
    },
    addWebpackPlugin(plugin),
    setWebpackPublicPath("http://localhost:3000")
  ),
};
