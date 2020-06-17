import React from "react";
import { shallow } from "enzyme";

import CheckBox from "../../04/CheckBox";

describe("<CheckBox>", () => {
  it("renders without crashing", () => {
    //1
    expect(() => {
      shallow(<CheckBox name="required">테스트</CheckBox>);
    }).not.toThrow();
  });

  it("displays errorMessage", () => {
    const errorMessage = "오류 메시지";
    const errorHtml = shallow(
      <CheckBox name="name" errorMessage={errorMessage}>
        테스트
      </CheckBox>
    )
      .dive()
      .find("span")
      .html(); //2
    expect(errorHtml).toContain(errorMessage); //3
  });

  it("calls back onChange on clicked", () => {
    const changeStub = jest.fn(); //4
    expect(changeStub).toHaveBeenCalledTimes(0);
    const input = shallow(
      <CheckBox name="required" onChange={changeStub}>
        테스트
      </CheckBox>
    )
      .dive()
      .find("input");
    expect(input).toHaveLength(1);
    input.simulate("click", { target: { checked: true } }); //5
    expect(changeStub).toHaveBeenCalledTimes(1); //6
    expect(changeStub).toHaveBeenCalledWith("required", true); //7
    input.simulate("click", { target: { checked: false } });
    expect(changeStub).toHaveBeenCalledWith("required", false); //8
  });
});
