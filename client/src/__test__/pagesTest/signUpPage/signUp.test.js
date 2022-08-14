import React from "react";
import SignUp from "../../../pages/signUpPage";
import { render, screen} from "@testing-library/react";

describe ("SignUp page", () => {
  test("renders SignUp page", () => {
  render(<SignUp />, { route: "/SignUp" });
  expect(screen.getByRole("heading")).toHaveTextContent(/testing/i);
})
test("Should render without crashing", async () => {
  render(
        <SignUp />
  )
})
})
