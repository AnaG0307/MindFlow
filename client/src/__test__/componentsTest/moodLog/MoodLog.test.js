import React from "react";
import { render } from '@testing-library/react'
import MoodLog from "../../../pages/moodLog/MoodLog"

describe("MoodLog", () => {
  test("Should render without crashing", async () => {
    render(
          <MoodLog />
    )
 })
})