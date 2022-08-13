import React from "react";
import { render } from '@testing-library/react'
import ResetPage from "../../../pages/resetPage/ResetPage"

describe("ResetPage", () => {
  test("Should render without crashing", async () => {
    render(
          <ResetPage />
    )
  })})