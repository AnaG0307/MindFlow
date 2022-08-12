import React from "react";
import { render, screen} from "@testing-library/react";
import Sidebar from "../../../components/sidebar";

describe ("Sidebar", () => {
  test("renders essential tags 1", () => {
  render(<Sidebar />);
  expect(screen.getByText(/User profile/i)).toBeInTheDocument();
  })
  test("renders essential tags 2", () => {
    render(<Sidebar />);
    expect(screen.getByText(/Daily Quiz/i)).toBeInTheDocument();
    })
    test("renders essential tags 3", () => {
      render(<Sidebar />);
      expect(screen.getByText(/Cycle tracker/i)).toBeInTheDocument();
      })
      test("renders essential tags 4", () => {
        render(<Sidebar />);
        expect(screen.getByText(/User Stats/i)).toBeInTheDocument();
        })
    });