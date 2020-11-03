import React from "react";
import { render } from "@testing-library/react";
import NewsItemModal from "./NewsItemModal";

describe("NewsItemModal tests", () => {
  it("should render", () => {
    expect(render(<NewsItemModal />)).toBeTruthy();
  });
});
