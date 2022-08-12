import React from "react";
import ReactDOM from "react-dom";
import { render, screen, fireEvent} from "@testing-library/react";
import UserProfile from "../../../pages/profilePage/UserProfile";

describe ("UserProfile", () => {
  test("renders profile page", () => {
  render(<UserProfile />, { route: "/UserProfile" });
  expect(screen.getByRole("heading")).toHaveTextContent(/testing/i);
})
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
})
test("should be able to Log out", () => {
  const mockFn = jest.fn()
  render (<UserProfile UserProfile={mockFn} />)
  const linkNode = screen.getByRole("Link");
  fireEvent.submit(linkNode);
  expect(mockFn).toHaveBeenCalledTimes(1);
});
});