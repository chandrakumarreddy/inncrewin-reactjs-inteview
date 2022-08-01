import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Test Home component", () => {
  test("renders No employees found", () => {
    render(<Home />);
    const h1Element = screen.getByText(/No employees found/i);
    expect(h1Element).toBeInTheDocument();
  });
});
