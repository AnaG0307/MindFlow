import React from "react";
import { render } from '@testing-library/react'
import Period from "../../../components/period/Period";

describe("Period", () => {
  test("Should render without crashing", async () => {
    render(
          <Period />
    )
 })
})