import React from "react";
import { render } from '@testing-library/react'
import Period from "../../../pages/periodPage/Period";


describe ("periodPage", () => {
  test("Should render without crashing", async () => {
    render(
          <Period />
    )
 })
})