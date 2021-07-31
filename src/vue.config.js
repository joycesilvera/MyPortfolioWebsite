module.exports = {
  chainWebpack: config => {
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("js-yaml-loader")
      .loader("js-yaml-loader")
      .end();
  }
};
