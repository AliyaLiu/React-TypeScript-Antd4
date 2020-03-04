import React from "react";
import {shallow, mount} from "enzyme";
import renderer from "react-test-renderer";
import Loading from "../src/components/Loading";

test("component unit test", () => {
    const loadingComponentProps = {
        isLoading: false,
        pastDelay: false,
        timedOut: false,
        retry: () => {}
    };
	const component = renderer.create(<Loading {...loadingComponentProps} error={false}/>);
	//快照测试
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
	//props error存在的情况的下组件渲染的应该是   '报错了'
	const ErrorLoading = shallow(<Loading {...loadingComponentProps} error={true} />);
	expect(ErrorLoading.text()).toEqual("报错了");
	//未定义props--error的情况
	const NormalLoading = shallow(<Loading {...loadingComponentProps} error={false}/>);
	expect(NormalLoading.text()).toEqual("努力加载中...");
	//enzyme ShallowWrapper(shallow方法返回值) API

	expect(NormalLoading.find("div")).toHaveLength(4);
	//enzyme Full Rendering API
	const FullRenderLoading = mount(<Loading {...loadingComponentProps} error={true} />);
	expect(FullRenderLoading.props()).toHaveProperty("error", true);
});
