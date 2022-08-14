import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import UserProfile from "../../../pages/profilePage/UserProfile";

describe ("UserProfile", () => {
  test("Should render without crashing", async () => {
    render(
          <UserProfile />
  })
})
