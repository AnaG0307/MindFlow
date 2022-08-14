import React from "react";
import { render } from "@testing-library/react"
import questionnairePage from "../../../pages/questionnairePage/Questionnaire"


describe("questionnairePage", () => {
  test("Should render without crashing", async () => {
    render(
          <questionnairePage />
    )
 })
})