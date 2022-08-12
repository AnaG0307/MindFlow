import React from "react";
import ReactDOM from "react-dom";
import ResetPage from "../../../pages/resetPage/ResetPage"

describe("ResetPage", () => {
  test("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResetPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
});