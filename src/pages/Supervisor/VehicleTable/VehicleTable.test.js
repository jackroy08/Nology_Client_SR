import React from "react";
import { render } from "@testing-library/react";
import VehicleTable from "./VehicleTable";

describe("VehicleTable tests", () => {
  it("should render", () => {
    expect(render(<VehicleTable />)).toBeTruthy();
  });
});
