import React from "react";
import { render } from "@testing-library/react"
import App from "../../../pages/statisticsPage/Statistics"


describe("App", () => {
  test("Should render without crashing", async () => {
    render(
          <App />
    )
 })
})