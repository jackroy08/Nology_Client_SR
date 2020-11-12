import React from "react";
import { render } from "@testing-library/react";
import SignOffMaintenanceForm from "./SignOffMaintenanceForm";

describe("SignOffMaintenanceForm tests", () => {
  it("should render", () => {
    expect(render(<SignOffMaintenanceForm />)).toBeTruthy();
  });
});
