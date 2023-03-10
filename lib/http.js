// 通过 axios 获取结果

const axios = require('axios')

axios.interceptors.response.use(res => {
  return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get('https://api.github.com/orgs/xjh-cli/repos')
}

module.exports = {
  getRepoList
}