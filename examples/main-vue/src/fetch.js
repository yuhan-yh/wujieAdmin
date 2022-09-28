/*
 * @Author: your name
 * @Date: 2022-09-28 20:37:14
 * @LastEditTime: 2022-09-28 22:48:58
 * @LastEditors: yuhan
 * @Description:
 * @FilePath: \wujie-admin\examples\main-vue\src\fetch.js
 */
// 携带登录态credentials必须为include
export default function fetch(url, options) {
  return window.fetch(url, { ...options, credentials: "omit" });
}
