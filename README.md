# react脚手架

test

## 介绍
> 基于 react 和 webpack 的 SPA 脚手架。
> 项目入口文件: src/mount.js

## 技术栈
- [react](https://reactjs.org/): react官网
- [react-router](https://reacttraining.com/react-router/web/guides/philosophy): 路由相关
- [redux](https://redux.js.org/): redux
- [typescript](https://www.typescriptlang.org/): ts
- [jest](https://jestjs.io/): jest单元测试
- [enzyme](https://airbnb.io/enzyme/): a JavaScript Testing utility for React
- [MockJS](http://mockjs.com/): 前端直接造数据；（生成随机数据，拦截 Ajax 请求）


## 建议安装的chrome扩展
1、https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi (react扩展，开发者模式能够看到react组件结构)
2、https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd (redux插件)


### 相关文件目录介绍:

````cmd
    ├── build                                   // webpack配置文件目录(webpack-merge 提供的 merge 可以融合配置)
    │   ├── postcss.config.js                   // postcss配置文件
    │   ├── jest.config.js                      // jest配置文件
    │   ├── webpack.config.base.js              // base 公用基础配置
    │   ├── webpack.config.development.js       // development 开发环境配置
    │   ├── webpack.config.production.js        // production 生产环境配置
    │   └── webpack.config.theme.js             // antd主题less变量配置文件
    ├── dist                                    // 打包完项目文件夹
    ├── src                                     // 项目业务文件夹
    │   ├── assets                              // 项目资源文件夹
    │   ├── components                          // react公用组件库
    │   ├── containers                          // 页面组件
    │   ├── mock                                // 模拟数据
    │   ├── router                              // 路由
    │   ├── store                               // redux 文件目录
    │   ├── styles                              // css文件
    │   ├── utils                               // 一些工具，比如一些公共类型(type.ts)
    │   ├── app.ts                              // react组件初始化文件
    │   └── mount.ts                            // 入口文件 (旧的入口是 index.js，已过期)
    ├── tests                                   // 单元测试文件夹
    │   └── __snapshots__                       // 测试快照文件夹
    │   └── setUp.js                            // 测试代码运行之前的配置
    │   └── *.test.js                           // 单元测试文件
    ├── views                                   // ejs模板
    │   └── index.tpl.ejs                       // 配合 html-webpack-plugin 生成最终的 index.html 文件(自动引入相关js css文件)
    ├── tsconfig.json                           // ts配置文件
    ├── .gitignore                              // git 忽略文件
    ├── changelog.md                            // 变更日志
    ├── package.json                            // node_modules 包版本管理文件
    ├── .browserslistrc                         // autoprefixer自动前缀配置文件
    ├── .eslintrc.js                            // eslint配置文件
    ├── .eslintignore                           // eslint忽略文件
    ├── yarn.lock                               
    └── README.md
````

## 安装步骤 ##
项目开发人员可安装 npm 或者 yarn 进行包管理，进入项目根目录，运行：

````cmd
    // 安装项目依赖，等待安装完成之后
    yarn
    // !!!不推荐使用 npm
    npm install
````


## 打包命令 ##

### 本地开发环境运行
- 开发环境devServer已经集成代理功能，可以直接浏览器跨域请求，也不需要再开其他代理或者使用chrome跨域浏览器
- 开发环境追求开发速度,所以不需要压缩混淆、postcss或者集成 css 之类的(直接 style-loader)
- 开发环境可以加入一些相关工具比如 redux 相关的 devtools
- 开发环境配置 webpack-devserver,配置热更新,代码修改无需手动刷新浏览器

```bash
npm run dev
```

### 项目本地编译(加入BundleAnalyzerPlugin可以分析各个模块大小)
```bash
npm run build-local
```
打包完成之后，可以在本地启服务(npm start)看项目运行是否正常

### 项目生产环境编译
- 生产环境资源使用 md5 进行版本号控制
- UglifyJsPlugin 压缩混淆业务代码
- 配置 postcss 如 autoprefixer
- 为减少 http 请求默认集成 bundle
- 同时为了防止具体某个 bundle 太大需要启用代码分割
- 根据路由配置按需加载
- 启用 css modules设置 class 局部变量，防止 class 重名等污染

```bash
npm run build
```

该命令会在dist文件夹生成相关文件。
运行：
```bash
npm start
```

该命令会将 `public` 目录在端口 5000 暴露为静态服务(资源目录为 dist 文件夹)， 访问 `http://localhost:5000` 预览生产环境项目

### npm scripts中环境变量
- cross-env NOT_RELEASE=true   
- cross-env 可以跨平台设置环境变量
- NOT_RELEASE=true  代表非生产环境
- IS_LOCAL=true  代表本地环境(加入了bundle-analyzer)
- cross-env FILE_TYPE=m   (FILE_TYPE项目类似,不定义则为pc端，非PC端项目会引入postcss-pxtorem插件)


## 变更日志

详见： [变更日志](./changelog.md)
