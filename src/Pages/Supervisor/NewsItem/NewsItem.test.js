import React from "react";
import { render } from "@testing-library/react";
import NewsItem from "./NewsItem";

describe("NewsItem tests", () => {
  it("should render", () => {
    expect(render(<NewsItem />)).toBeTruthy();
  });
});
