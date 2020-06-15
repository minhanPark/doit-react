import React from "react";
import { shallow } from "enzyme";

import Input from "../../Input";

describe("<Input>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });
  it("assigns the prop value and type", () => {
    const expectedValue = "123";
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
    expect(wrapper.find("input").prop("value")).toBe(expectedValue);
    const { type, value } = wrapper.find("input").props();
    expect(value).toBe(expectedValue);
    expect(type).toBe("text");
  });
  it("renders errorMessage", () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find(".error")).toHaveLength(0); //1
    const expectedErrorMessage = "옳지 못한 값이 입력되었습니다.";
    wrapper.setProps({ errorMessage: expectedErrorMessage }); //2
    expect(wrapper.find("span").prop("className")).toBe("error");
    expect(wrapper.find(".error")).toHaveLength(1); //3
    expect(wrapper.html()).toContain(expectedErrorMessage); //4
  });
});

describe("contains <input>", () => {
  it("renders one input", () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(1);
  });
});