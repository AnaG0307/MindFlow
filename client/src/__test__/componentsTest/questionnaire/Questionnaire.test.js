import React from "react";
import { render } from "@testing-library/react"
import Questionnaire from "../../../components/questionnaire/Questionnaire"


describe("Questionnaire", () => {
  test("Should render without crashing", async () => {
    render(
          <Questionnaire />
    )
 })
})