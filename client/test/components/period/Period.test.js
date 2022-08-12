import React from "react";
import ReactDOM from "react-dom";
import Period from "../../components/period"

describe("Period", () => {
  test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Period />, div);
  ReactDOM.unmountComponentAtNode(div);
});
});