'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525493950685_4595';

  // add your config here
  config.middleware = [];
  //配置mongoose mongoose是node里面操作mongodb数据库的一个模块
  //它可以以对象的形式操作数据库
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/blog',
      options:{
        server: {
            auto_reconnect: true,
            poolSize: 10
        }
      }
    }
  }
  config.security = {
    csrf: false,
    domainWhiteList: ['http://123.56.12.44:3001']
  }
  config.cors = {
    credentials: true,
    allowMethods:"GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS"
  }

  return config;
};
