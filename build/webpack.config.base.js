const path = require("path");
const webpack = require("webpack");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const modifyVars = require("./webpack.config.theme.js");
const tsImportPluginFactory = require("ts-import-plugin");
const filePublicPath = "assets/[name].[ext]";
module.exports = {
	context: path.resolve(__dirname, ".."),
	resolve: {
		mainFiles: ["index.ts", "index.tsx", "index.js"],
		modules: [
			path.resolve(__dirname, "../src"),
			path.resolve(__dirname, "../node_modules"),
			"node_modules"
		],
		alias: {
			"src": path.resolve(__dirname, "../src"), //ts中需要额外配置别名
			"@containers": "src/containers",
			"@store": "src/store",
			"@components": "src/components",
			"@styles": "src/styles",
			"@utils": "src/utils",
			"@routers": "src/router",
			"@assets": "src/assets",
			"@mock": "src/mock"
		},
		extensions: [
			".web.js",
			".js",
			".jsx",
			".less",
			".css",
			".json",
			".scss",
			".ts",
			".tsx"
		] //自动解析的扩展
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: [/node_modules/, path.resolve(__dirname, "../src/components/Iconfont/source")],
				include: path.resolve(__dirname, "../src"),
				use: [
					{
						loader: "awesome-typescript-loader",
						options: {
							getCustomTransformers: () => ({
								before: [
									tsImportPluginFactory({
										libraryName: "antd",
										libraryDirectory: "lib",
										style: true
									})
								]
							})
						}
					},
					{
						loader: "eslint-loader"
					}
				]
			},
			{
				test: /\.eot$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.woff$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.ttf$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							name: filePublicPath,
							limit: 100
						}
					}
				]
			},
			{
				test: /\.ico$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.svg$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
                    {
						loader: "postcss-loader", // translates CSS into CommonJS
                        options: {
                            plugins: [require('autoprefixer')]
                        }
					},
					{
						loader: "less-loader", // compiles Less to CSS
						options: {
							modifyVars: modifyVars,
							javascriptEnabled: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "views/index.tpl.ejs",
			filename: "index.html",
			minify: true,
			inject: true
		}),
        new CaseSensitivePathsPlugin()
	],
	externals: [
		require("webpack-require-http") //支持require 线上地址资源
	]
};
