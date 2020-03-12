const path = require("path");
const webpack = require("webpack");
const client = require("./webpack.config.base.js");
const merge = require("webpack-merge");
const base = require("./webpack.config.base");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const host = "webapp.leke.cn";
module.exports = merge(base, {
	// entry: "./src/mount.tsx",
	entry: {
		bundle: ['@babel/polyfill', path.resolve(__dirname, "../src/mount.tsx")]
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "js/[name].js",
		chunkFilename: "js/[name].js",
		publicPath: "/"
	},
	mode: "development",
	devtool: "eval-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true,
		disableHostCheck: true,
        // host: '0.0.0.0',
		proxy: {
			"/auth": {
				// target: "https://webapp.leke.cn",
				// headers: {
				// 	host: host
				// },
				changeOrigin: true,
				secure: false,
				cookieDomainRewrite: {
					"/unchanged.path/": "/unchanged.path/",
					"/old.path/": "/new.path/",
					"*": ""
				},
				onProxyReq(proxyReq, req) {
					// 将本地请求的头信息复制一遍给代理。
					// 包含cookie信息，这样就能用登录后的cookie请求相关资源
					Object.keys(req.headers).forEach(function(key) {
						proxyReq.setHeader(key, req.headers[key]);
					}); // 代理的host 设置成被代理服务的，解决跨域访问
					proxyReq.setHeader("Host", host);
				},
				onProxyRes(proxyRes, req, res) {
					// 将服务器返回的头信息，复制一遍给本地请求的响应。
					// 这样就能实现 执行完登录后，本地的返回请求中也有相关cookie，从而实现登录功能代理。
					Object.keys(proxyRes.headers).forEach(function(key) {
						res.append(key, proxyRes.headers[key]);
					});
				}
			}
		}
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			// $: 'jquery',
			// jQuery: 'jquery',
			// 'window.jQuery': 'jquery',
			// 'window.Tether': 'tether'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							root: "./"
						}
					}
				]
			},
			{
				test: /\.scss|sass$/,
				use: [
					{
						loader: "style-loader" // 将 JS 字符串生成为 style 节点
					},
					{
						loader: "typings-for-css-modules-loader",
						options: {
							modules: true, //class局部作用域
							namedExport: true,
							camelCase: true,
							minimize: true,
							localIdentName: "[local]_[hash:base64:5]"
						}
					},
					{
						loader: "postcss-loader",
						options: {
							config: {
								path: path.resolve(
									__dirname,
									"./postcss.config.js"
								)
							}
						}
					},
					{
						loader: "sass-loader" // 将 Sass 编译成 CSS
					}
				]
			}
		]
	}
});
