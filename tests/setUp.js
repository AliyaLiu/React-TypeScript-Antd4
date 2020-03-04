//在测试代码运行之前去做一些配置
const jsdom = require("jsdom");
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });
const {JSDOM}=jsdom;
const { window } = new JSDOM(`...`);
global.window = window;
global.document = window.document;
global.navigator = window.navigator;
