const { override, addWebpackPlugin } = require("customize-cra");

const moduleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const plugin = new moduleFederationPlugin({
  name: "user",
  // 导⼊远程子应用模块
  remotes: {
    // 导⼊后给模块起个别名：“微应⽤名称@地址/导出的⽂件名”
    remoteStudentProject: "student@http://localhost:3000/student.js",
  },
});

module.exports = {
  webpack: override((config, env) => {
    // 修改打包输出output
    return config;
  }, addWebpackPlugin(plugin)),
};
