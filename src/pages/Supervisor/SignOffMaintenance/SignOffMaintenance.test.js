import React from "react";
import { render } from "@testing-library/react";
import SignOffMaintenance from "./SignOffMaintenance";

describe("SignOffMaintenance tests", () => {
  it("should render", () => {
    expect(render(<SignOffMaintenance />)).toBeTruthy();
  });
});
