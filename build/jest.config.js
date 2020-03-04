//jest配置文件
const {defaults: tsjPreset} = require("ts-jest/presets");
module.exports = {
	transform: {
		...tsjPreset.transform,
		".+\\.(css|style|less|sass|scss)$": "jest-css-modules-transform"
	},
    moduleNameMapper: {
      '^@containers(.*)$': "<rootDir>/src/containers$1",
      '^@store(.*)$': "<rootDir>/src/store$1",
      '^@styles(.*)$': "<rootDir>/src/styles$1",
      '^@utils(.*)$': "<rootDir>/src/utils$1",
      '^@assets(.*)$': "<rootDir>/src/assets$1",
      '^@constant(.*)$': "<rootDir>/src/constant$1",
      '^@components(.*)$': "<rootDir>/src/components$1",
      '^@router(.*)$': "<rootDir>/src/router$1"
    },
	moduleFileExtensions: ["js", "ts", "tsx"],
	rootDir: "../",
	testEnvironment: "jest-environment-node",
	setupFiles: ["./tests/setUp.js"],
	preset: "ts-jest"
};
// const {defaults} = require("jest-config");
// module.exports = {
// 	transform: {
//       "^.+\\.js$": "babel-jest",
//       "^.+\\.jsx$": "babel-jest",
//       ".+\\.(css|style|less|sass|scss)$": "jest-css-modules-transform"
//     },
// 	moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
// 	rootDir: "../",
// 	testEnvironment: "jest-environment-node",
// 	setupFiles:["./tests/setUp.js"],
//     preset: 'ts-jest'
// };
// jest 命令行参数
/**
    @params -u     快照替换
    @params --coverage 测试结果表格展示
*/
