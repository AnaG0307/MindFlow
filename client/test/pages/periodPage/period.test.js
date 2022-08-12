import React from "react";
import Period from "../../../pages/periodPage/Period";
import { render, screen} from "@testing-library/react";
import ReactDOM from "react-dom";

describe ("periodPage", () => {
  test("renders period page", () => {
  render(<Period />, { route: "/Period" });
  expect(screen.getByRole("heading")).toHaveTextContent(/testing/i);
})
test("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Period />, div);
  ReactDOM.unmountComponentAtNode(div);
})
});