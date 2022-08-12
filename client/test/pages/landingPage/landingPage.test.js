import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import LandingPage from "../../../pages/landingPage/LandingPage";

describe ("landingPage", () => {
  test("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
test("renders Sign up", () => {
  render(<LandingPage />, {
    route: "/LandingPage",
  });
  expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
})
test("renders Log in", () => {
  render(<LandingPage />, {
    route: "/LandingPage",
  });
  expect(screen.getByText(/Log in/i)).toBeInTheDocument();
})
});