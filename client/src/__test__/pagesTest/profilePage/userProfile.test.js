import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import UserProfile from "../../../pages/profilePage/UserProfile";

describe ("UserProfile", () => {
  test("Should render without crashing", async () => {
    render(
          <UserProfile />
    )
 })
test("should be able to Log out", () => {
  const mockFn = jest.fn()
  render (<UserProfile UserProfile={mockFn} />)
  const linkNode = screen.getByRole("Link");
  fireEvent.submit(linkNode);
  expect(mockFn).toHaveBeenCalledTimes(1);
});
});