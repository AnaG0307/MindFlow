import React from "react";
import { render } from '@testing-library/react'
import Footer from "../../../components/footer/Footer"

describe("Footer", () => {
  test("Should render without crashing", async () => {
    render(
          <Footer />
    )
 })
})