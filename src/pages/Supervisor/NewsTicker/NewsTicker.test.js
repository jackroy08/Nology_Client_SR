import React from "react";
import { render } from "@testing-library/react";
import NewsTicker from "./NewsTicker";

describe("NewsTicker tests", () => {
  it("should render", () => {
    expect(render(<NewsTicker />)).toBeTruthy();
  });
});
