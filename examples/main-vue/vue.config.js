/*
 * @Author: your name
 * @Date: 2022-09-28 14:46:01
 * @LastEditTime: 2022-09-28 17:32:33
 * @LastEditors: yuhan
 * @Description:
 * @FilePath: \wujie-admin\examples\main-vue\vue.config.js
 */
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "/",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    open: process.env.NODE_ENV === "development",
    port: "8000",
  },
};
