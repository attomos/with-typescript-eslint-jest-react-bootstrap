import React from "react";
import { render } from "../testUtils";
import IndexPage from "../../pages/index";

describe("IndexPage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<IndexPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
