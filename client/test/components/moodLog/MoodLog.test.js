import React from "react";
import ReactDOM from "react-dom";
import MoodLog from "../../components/moodLog"

describe("MoodLog", () => {
  test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoodLog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
});