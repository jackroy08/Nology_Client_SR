import React from "react";
import { render } from "@testing-library/react";
import SupervisorIncidentForm from "./SupervisorIncidentForm";

describe("SupervisorIncidentForm tests", () => {
  it("should render", () => {
    expect(render(<SupervisorIncidentForm />)).toBeTruthy();
  });
});
