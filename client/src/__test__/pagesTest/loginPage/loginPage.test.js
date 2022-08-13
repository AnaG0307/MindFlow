import { render} from "@testing-library/react";
import LoginPage from "../../../pages/loginPage/LoginPage";

describe ("LoginPage", () => {
  test("Should render without crashing", async () => {
    render(
          <LoginPage />
    )
 })
})