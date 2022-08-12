import React from "react";
import { render, screen} from "@testing-library/react";
import SideBar from "../../../components/Sidebar2.js";

describe ("Sidebar", () => {
  test("renders essential tags 1", () => {
  render(<SideBar />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  })
  test("renders essential tags 2", () => {
    render(<SideBar />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    })
    test("renders essential tags 3", () => {
      render(<SideBar />);
      expect(screen.getByText(/User Profile/i)).toBeInTheDocument();
      })
      test("renders essential tags 4", () => {
        render(<SideBar />);
        expect(screen.getByText(/Calendar/i)).toBeInTheDocument();
        })
        test("renders essential tags 5", () => {
          render(<SideBar />);
          expect(screen.getByText(/Settings/i)).toBeInTheDocument();
          })
    });