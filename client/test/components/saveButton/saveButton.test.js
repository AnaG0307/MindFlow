import React from "react";
import ReactDOM from "react-dom";
import Form from "../../components/saveButton/saveButton.js"
import { render, screen, fireEvent} from "@testing-library/react";


describe("Form", () => {
  test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("should be able to submit form", () => {
    const mockFn = jest.fn()
    render (<Form Form={mockFn} />)
    const buttonNode = screen.getByRole("button");
    fireEvent.submit(buttonNode);
    expect(mockFn).toHaveBeenCalledTimes(1);
});
});