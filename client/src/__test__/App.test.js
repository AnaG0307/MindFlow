import { render } from '@testing-library/react';
import App from "../app"

describe ("App", () => {
  test("Should render without crashing", async () => {
    render(
          <App />
    )
 })
})
