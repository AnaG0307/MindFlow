import React from "react";
import { render } from '@testing-library/react'
import SideBar from "../../../components/sidebar/Sidebar2";

describe ("Sidebar", () => {
  test("Should render without crashing", async () => {
    render(
          <SideBar />
    )
 })
})