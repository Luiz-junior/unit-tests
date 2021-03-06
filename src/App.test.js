import React from "react";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import { render, screen } from "@testing-library/react";
import App from "./App";

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {});

test("renders counter display", () => {});

test("counter starts at 0", () => {});

test("clicking on button increments counter display", () => {});
