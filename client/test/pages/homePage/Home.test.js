import React from "react";
import Home from "../../../pages/homePage";
import ReactDOM from "react-dom";

describe ("Home", () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  });