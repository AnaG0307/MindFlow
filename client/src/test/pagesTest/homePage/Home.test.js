import React from "react";
import { render } from '@testing-library/react'
import Home from "../../../pages/homePage";


describe ("Home", () => {
  test("Should render without crashing", async () => {
    render(
          <Home />
    )
 })
})