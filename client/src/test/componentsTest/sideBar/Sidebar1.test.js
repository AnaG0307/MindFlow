import React from "react";
import { render } from '@testing-library/react'
import Sidebar from "../../../components/sidebar/Sidebar";

describe ("Sidebar", () => {
  test("Should render without crashing", async () => {
    render(
          <Sidebar />
    )
 })
})