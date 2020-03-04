# 2019-07-19
### 1 添加jest.config.js moduleNameMapper配置项

# 2019-07-18
### 1 修改ts/jest单元测试相关配置

# 2019-07-17
### 1 添加case-sensitive-paths-webpack-plugin大小写敏感插件，

# 2019-07-09
### 1 redux文件夹重命名，将原有的modules中的文件全部移动到store文件夹中 并添加每个模块的type.ts
### 2 完善readme文件

# 2019-05-10
### 1 加入IgnorePlugin配置，优化moment打包体积过大问题(打包后文件减小200k左右)
### 2 应用 allowSyntheticDefaultImports 配置，将代码中的 import * as modules from 'xx' 改为 import modules from 'xx';
### 3 别名的重命名，以@开头，并调整sass文件的相对位置

# 2019-04-09
### 1、ts分支devServer配置加入代理功能，开发环境无需再开跨域浏览器

# 2019-04-08
### 1、ts分支删除.babelrc配置文件，webpack.config.base.js去除babel-loader
### 2、加入ts-import-plugin,支持antd动态加载,修改antd版本为3.8.2(和master分支一致) tsconfig.json修改module:esnext

# 2019-04-03
### 1、加入@cnstrong/eslint-config-cnstrong-react，引入eslint
### 2、去除原有的落后的分支
### 3、增加jest单元测试

# 2019-02-22
### 1、去除原先的core-js和polyfill的手动引用，加入transform-runtime，修改.babelrc配置
### 2、加入@babel/plugin-transform-async-to-generator,加入对async await兼容(babel6升级到babel7的时候丢失了兼容)
### 3、react-loadable中的loading组件捕获了异常导致一些异常的发生没有展现在console中，当前修改了loading组件，加上了error判断和console.error

# 2019-01-30
### 1、tsconfig.json修改:compilerOptions加入paths(对应webpack中的alias别名),可以根据此别名引入tsx/ts文件
### 2、typings-for-css-modules-loader加入，对应更改webpack配置文件

# 2019-01-29
### 1、README文件修改(新增corss-env FILE_TYPE说明)
### 2、.bablerc加入antd&antd-mobile配置

# 2019-01-28
### 1、README文件修改(新增规范CI/CD说明)
### 2、webpack.config.production.js修改:module.exports ={...}改为module.exports =function(env){...}
### 3、打包命令调整:npm/yarn run build -- --env.ENV=pre(非release分支全部由此命令打包，保留log和source-map)

# 2019-01-14
### 1、antd修改版本至3.8.2
### 2、source-map配置优化
### 3、cross-env(跨平台环境变量设置)加入(package.json中有案例)

# 2019-01-04 加入webpack-bundle-analyzer能够分析项目每个模块插件依赖的体积大小

# 2018-10-25 redux加入，加入redux-devtools-extension chrome扩展(https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

# 2018-09-07 基础路由加入
