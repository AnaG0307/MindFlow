import React from "react";
import { render } from "@testing-library/react"
import ResourcesPage from "../../../pages/resourcesPage/Resources"


describe("ResourcesPage", () => {
  test("Should render without crashing", async () => {
    render(
          <ResourcesPage />
    )
 })
})