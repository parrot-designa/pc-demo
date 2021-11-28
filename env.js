module.exports = {
    // 开发环境
    dev: {
      NODE_ENV: 'development',
      BASE_API: 'https://baba.ltd/', // 开发服务器地址
      SITE:101,
      IMAGE_PREFIX:''
    },
    // 测试环境
    test: {
      NODE_ENV: 'test',
      BASE_API: '' // 测试服务器地址
    },
    // 生产环境
    pro: {
      NODE_ENV: 'production',
      BASE_API: '' // 正式服务器地址
    }
}