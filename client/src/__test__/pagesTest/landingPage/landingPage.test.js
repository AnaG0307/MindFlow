import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../../pages/landingPage/LandingPage";

describe ("landingPage", () => {
  test("Should render without crashing", async () => {
    render(
          <App />
    )
 })
})
test("renders Sign up", () => {
  render(<App />, {
    route: "/App",
  });
  expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
})
test("renders Log in", () => {
  render(<App />, {
    route: "/App",
  });
  expect(screen.getByText(/Log in/i)).toBeInTheDocument();
});