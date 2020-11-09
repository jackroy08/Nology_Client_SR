import React from "react";
import { render } from "@testing-library/react";
import LoadApproveForm from "./LoadApproveForm";

describe("LoadApproveForm tests", () => {
  it("should render", () => {
    expect(render(<LoadApproveForm />)).toBeTruthy();
  });
});
