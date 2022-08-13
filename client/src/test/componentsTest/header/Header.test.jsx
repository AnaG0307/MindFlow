import React from "react";
import { render } from '@testing-library/react'
import Header from "../../../components/header/Header";

test("renders Header component", () => {
  render(<Header />);
  expect(screen.asFragment()).toMatchSnapshot();
  expect(screen.getByRole("mfl-logo")).toBeInTheDocument();
});
test("Should render without crashing", async () => {
  render(
        <Header />
  )
})