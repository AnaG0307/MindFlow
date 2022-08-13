import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import Form from "../../../components/SaveButton/saveButton"


describe("Form", () => {
  test("Should render without crashing", async () => {
    render(
          <Form />
    )
 })
})
test("should be able to submit form", () => {
    const mockFn = jest.fn()
    render (<Form Form={mockFn} />)
    const buttonNode = screen.getByRole("button");
    fireEvent.submit(buttonNode);
    expect(mockFn).toHaveBeenCalledTimes(1);
});
