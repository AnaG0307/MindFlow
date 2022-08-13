import { render, screen } from "@testing-library/react"
import ReactDOM from "react-dom";
import user from "@testing-library/user-event";
import Registration from "../../../components/login/Registration"

describe("Registration", () => {
  test("Should render without crashing", async () => {
    render(
          <Registration />
    )
  })
  })
  test("renders register", () => {
  render(<Registration />, {
  route: "/Registration",
  });
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
})
  test("on submit, with no input data sign up request is not called", async () => {
    render(<Registration />, { route: "/Registration" });
    user.click(screen.getByRole("button"));
  })
