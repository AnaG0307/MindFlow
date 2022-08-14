import React from "react";
import { render } from "@testing-library/react"
import Resources from "../../../components/resources/Resources"


describe("Resources", () => {
  test("Should render without crashing", async () => {
    render(
          <Resources />
    )
 })
})