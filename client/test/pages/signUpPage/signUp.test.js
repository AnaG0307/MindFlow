import React from "react";
import ReactDOM from "react-dom";
import SignUp from "../../../pages/signUpPage";
import { render, screen} from "@testing-library/react";

describe ("SignUp page", () => {
  test("renders SignUp page", () => {
  render(<SignUp />, { route: "/SignUp" });
  expect(screen.getByRole("heading")).toHaveTextContent(/testing/i);
})
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUp />, div);
  ReactDOM.unmountComponentAtNode(div);
})
});